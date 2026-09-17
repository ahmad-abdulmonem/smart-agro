import Image from "next/image";
export default function OurIntroduction() {
  return <section id="about" className="section-space"><div className="section-shell farm-intro">
    <div className="farm-intro-copy"><p className="farm-caption">Our connection to the land</p><h2 className="farm-heading">Good food<br />starts here.</h2><p className="farm-body">In the soil. In the seasons. In the hands of the people who grow it.</p><p className="farm-body">Explore agriculture from the ground up — the growing, the harvest, and the produce that finds its way to our tables.</p><a className="farm-link" href="#services">Our approach <span aria-hidden="true">↗</span></a></div>
    <figure className="farm-intro-photo"><Image src="/our_intruduction_image.png" alt="Working with the harvest" width={564} height={651} sizes="(max-width: 767px) 90vw, 50vw" className="h-full w-full object-cover" /><figcaption>From soil to harvest.</figcaption></figure>
  </div></section>;
}
