import Image from "next/image";
import HeroAtmosphere from "@/components/HeroAtmosphere";
export default function HeroSection() {
  return <section id="home" className="farm-hero">
    <Image src="/hero_section_image.png" alt="Cultivated fields stretching toward the horizon" fill preload sizes="100vw" className="object-cover" />
    <div className="farm-hero-shade" />
    <HeroAtmosphere />
    <div className="section-shell farm-hero-content">
      <p className="farm-caption" data-reveal>Smart Agro · From field to table</p>
      <h1 data-reveal>Agriculture<br /><span>matters.</span></h1>
      <div className="farm-hero-bottom" data-reveal><p>The land we work.<br />The food we share.<br />A future worth growing.</p><a className="farm-link" href="#products">Explore our produce <span aria-hidden="true">↗</span></a></div>
    </div>
  </section>;
}
