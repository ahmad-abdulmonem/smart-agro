import Image from "next/image";
export default function ModernAgriculture() {
  return <section id="services" className="section-space farm-approach"><div className="section-shell farm-approach-layout">
    <div><p className="farm-caption">Our approach</p><h2 className="farm-heading">Behind every<br />harvest,<br /><span>human hands.</span></h2><p className="farm-body">Good growing takes observation, patience, and care. For the soil. For the crop. For the next season.</p><a href="#news" className="farm-link">Read the field notes <span aria-hidden="true">↗</span></a></div>
    <div className="farm-approach-photo"><Image src="/family.png" alt="People working together in the field" fill sizes="(max-width: 767px) 90vw, 45vw" className="object-cover" /></div>
  </div></section>;
}
