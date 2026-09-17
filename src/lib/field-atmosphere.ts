import { BufferAttribute, BufferGeometry, LineSegments, OrthographicCamera, Points, Scene, ShaderMaterial, Vector2, WebGLRenderer } from "three";

/** Two GPU draw calls: wind-shaped field contours and airborne pollen. */
export function createFieldAtmosphere(canvas: HTMLCanvasElement) {
  const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
  renderer.setClearColor(0x000000, 0);
  const scene = new Scene();
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const uniforms = { time: { value: 0 }, pointer: { value: new Vector2() }, ratio: { value: 1 } };
  const lines = new Float32Array(22 * 100 * 2 * 3);
  let offset = 0;
  for (let row = 0; row < 22; row++) {
    for (let segment = 0; segment < 100; segment++) {
      for (let end = 0; end < 2; end++) {
        lines[offset++] = (segment + end) / 100 * 2 - 1;
        lines[offset++] = row / 21;
        lines[offset++] = 0;
      }
    }
  }
  const lineGeometry = new BufferGeometry();
  lineGeometry.setAttribute("position", new BufferAttribute(lines, 3));
  const lineMaterial = new ShaderMaterial({
    transparent: true, depthTest: false, depthWrite: false, uniforms,
    vertexShader: `
      uniform float time;
      uniform vec2 pointer;
      varying float opacity;
      void main() {
        float x = position.x;
        float row = position.y;
        float y = -0.94 + row * 0.43;
        y += sin(x * 3.0 + time * 0.48 + row * 1.5) * (0.13 + row * 0.08);
        y += pow(max(x, 0.0), 2.0) * 0.62;
        y += pointer.y * 0.045 + sin(x * 6.0 - time * 0.3) * 0.025;
        x += pointer.x * 0.025;
        opacity = smoothstep(-0.4, 0.8, x) * (0.2 + row * 0.25);
        gl_Position = vec4(x, y, 0.0, 1.0);
      }`,
    fragmentShader: `varying float opacity;
      void main() { gl_FragColor = vec4(0.969, 0.765, 0.373, opacity); }`,
  });
  const contours = new LineSegments(lineGeometry, lineMaterial);
  contours.frustumCulled = false;
  scene.add(contours);
  const count = window.innerWidth < 640 ? 45 : 110;
  const seeds = new Float32Array(count * 3);
  let seed = 1729;
  for (let i = 0; i < seeds.length; i++) { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; seeds[i] = seed / 4294967296; }
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new BufferAttribute(seeds, 3));
  const material = new ShaderMaterial({
    uniforms, transparent: true, depthTest: false, depthWrite: false,
    vertexShader: `
      uniform float time;
      uniform float ratio;
      uniform vec2 pointer;
      varying float opacity;
      void main() {
        float depth = 0.3 + position.z * 0.7;
        float x = mod(position.x + time * (0.012 + position.z * 0.015), 1.0) * 2.0 - 1.0;
        float y = position.y * 2.0 - 1.0 + sin(time * 0.7 + position.x * 20.0) * 0.08;
        gl_Position = vec4(vec2(x, y) + pointer * depth * 0.06, 0.0, 1.0);
        gl_PointSize = (3.0 + position.z * 9.0) * ratio;
        opacity = 0.2 + position.z * 0.55;
      }`,
    fragmentShader: `varying float opacity;
      void main() {
        float glow = 1.0 - smoothstep(0.05, 0.5, length(gl_PointCoord - 0.5));
        gl_FragColor = vec4(0.969, 0.765, 0.373, glow * opacity);
      }`,
  });
  const pollen = new Points(geometry, material);
  pollen.frustumCulled = false;
  scene.add(pollen);
  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    uniforms.ratio.value = ratio;
    renderer.setPixelRatio(ratio);
    renderer.setSize(Math.max(canvas.clientWidth, 1), Math.max(canvas.clientHeight, 1), false);
  }
  resize();
  return {
    resize,
    draw(time: number, x: number, y: number) { uniforms.time.value = time; uniforms.pointer.value.set(x, y); renderer.render(scene, camera); },
    dispose() { lineGeometry.dispose(); lineMaterial.dispose(); geometry.dispose(); material.dispose(); scene.clear(); renderer.dispose(); },
  };
}
