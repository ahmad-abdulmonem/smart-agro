import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

function mount({ reducedMotion = false, supported = true } = {}) {
  let effect;
  let observer;
  let created = 0;
  let disposed = 0;
  let draws = 0;
  let nextFrame = 0;
  const frames = new Map();
  const media = Object.assign(new EventTarget(), { matches: reducedMotion });
  const document = Object.assign(new EventTarget(), { hidden: false });
  const host = new EventTarget();
  const canvas = Object.assign(new EventTarget(), { style: {}, closest: () => host });
  const exports = {};
  const source = ts.transpileModule(fs.readFileSync("src/components/HeroAtmosphere.tsx", "utf8"), {
    compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  vm.runInNewContext(source, {
    exports, document, Event,
    matchMedia: () => media,
    requestAnimationFrame: (callback) => { frames.set(++nextFrame, callback); return nextFrame; },
    cancelAnimationFrame: (id) => frames.delete(id),
    IntersectionObserver: class { constructor(callback) { observer = callback; } observe() {} disconnect() {} },
    ResizeObserver: class { observe() {} disconnect() {} },
    require: (name) => {
      if (name === "react") return {
        useEffect: (callback) => { effect = callback; },
        useRef: (value) => ({ current: value === null ? canvas : value }),
        useState: (value) => [value, () => {}],
      };
      if (name === "react/jsx-runtime") return { jsx: () => null, jsxs: () => null };
      if (name === "@/lib/field-atmosphere") return {
        createFieldAtmosphere: () => {
          created++;
          return supported ? { resize() {}, draw() { draws++; }, dispose() { disposed++; } } : null;
        },
      };
      throw new Error(`Unexpected import: ${name}`);
    },
  });
  exports.default();
  const cleanup = effect();
  return {
    media, document, canvas, cleanup,
    visible: (isIntersecting) => observer([{ isIntersecting }]),
    tick(time) { const batch = [...frames.values()]; frames.clear(); batch.forEach((callback) => callback(time)); },
    stats: () => ({ created, disposed, draws, scheduled: frames.size }),
  };
}

test("WebGL rendering pauses offscreen and in background tabs; cleanup releases resources", () => {
  const app = mount();
  assert.equal(app.stats().scheduled, 0);
  app.visible(true);
  app.tick(100);
  app.tick(140);
  assert.ok(app.stats().draws > 1);
  app.visible(false);
  assert.equal(app.stats().scheduled, 0);
  app.visible(true);
  app.document.hidden = true;
  app.document.dispatchEvent(new Event("visibilitychange"));
  assert.equal(app.stats().scheduled, 0);
  app.document.hidden = false;
  app.document.dispatchEvent(new Event("visibilitychange"));
  assert.equal(app.stats().scheduled, 1);
  app.cleanup();
  assert.equal(app.stats().scheduled, 0);
  assert.equal(app.stats().disposed, 1);
});

test("reduced motion skips GPU initialization and responds to preference changes", () => {
  const app = mount({ reducedMotion: true });
  app.visible(true);
  assert.equal(app.stats().created, 0);
  app.media.matches = false;
  app.media.dispatchEvent(new Event("change"));
  assert.equal(app.stats().created, 1);
  app.media.matches = true;
  app.media.dispatchEvent(new Event("change"));
  assert.equal(app.stats().disposed, 1);
  assert.equal(app.stats().scheduled, 0);
  assert.equal(app.canvas.style.opacity, "0");
  app.cleanup();
});

test("unsupported WebGL falls back without an animation loop", () => {
  const app = mount({ supported: false });
  app.visible(true);
  assert.equal(app.stats().scheduled, 0);
  assert.equal(app.canvas.style.opacity, "0");
  app.cleanup();
});

test("context loss stops rendering and restoration recreates resources", () => {
  const app = mount();
  app.visible(true);
  app.canvas.dispatchEvent(new Event("webglcontextlost", { cancelable: true }));
  assert.equal(app.stats().scheduled, 0);
  assert.equal(app.stats().disposed, 1);
  app.canvas.dispatchEvent(new Event("webglcontextrestored"));
  assert.equal(app.stats().created, 2);
  assert.equal(app.stats().scheduled, 1);
  app.cleanup();
  assert.equal(app.stats().disposed, 2);
});

