"use client";
import { useState } from "react";
import Image from "next/image";
import { useProductInquiry } from "@/components/ProductInquiryProvider";
const projects = [
  { image: "/projects/sustainable-farming.webp", position: "50% 50%", alt: "Aerial view of green crops growing in organized rows", title: "Sustainable farming", focus: "The growing field", description: "Crop rotation, ground cover, and the everyday decisions that shape the next harvest." },
  { image: "/projects/seasonal-produce.webp", position: "50% 68%", alt: "Seasonal vegetables and fruit arranged in wooden market crates", title: "Growing with the seasons", focus: "Seasonal variety", description: "Follow the changing colors and flavors of the harvest, from the field to the market." },
  { image: "/projects/people-harvesting.webp", position: "50% 58%", alt: "Farm workers gathering leafy vegetables in a field", title: "The human touch", focus: "People & harvest", description: "A closer look at the people behind the harvest and the care that goes into gathering it." },
  { image: "/projects/farm-equipment.webp", position: "50% 50%", alt: "A harvester loading crops into a tractor trailer", title: "Tools of the field", focus: "Farm equipment", description: "From preparing the soil to gathering crops, explore the machinery at work on the land." },
];
export default function RecentlyCompleted() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setProject } = useProductInquiry();
  const selected = projects[activeIndex];
  return <section id="projects" className="section-space farm-projects"><div className="section-shell">
    <div className="farm-section-top"><h2 className="farm-heading">Out in the field.</h2><p>Explore farming ideas</p></div>
    <div className="farm-project-layout">
      <div id="project-preview" className="farm-project-photo"><Image key={selected.image} src={selected.image} alt={selected.alt} style={{ objectPosition: selected.position }} fill sizes="(max-width: 767px) 700px, 1080px" className="object-cover product-detail" /><div className="farm-project-caption"><p>{selected.focus}</p><h3>{selected.title}</h3></div></div>
      <div className="farm-project-stories"><div role="group" aria-label="Project concepts">{projects.map((project,index) => <button key={project.title} type="button" aria-label={`Preview ${project.title}`} aria-pressed={activeIndex === index} aria-controls="project-preview" onClick={() => setActiveIndex(index)} className="farm-project-choice"><span>{project.title}</span><span aria-hidden="true">{activeIndex === index ? "↙" : "↗"}</span></button>)}</div><p className="farm-body farm-project-description">{selected.description}</p>
        <button className="farm-link" type="button" onClick={() => { setProject(selected.title); document.getElementById("contact")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); document.getElementById("contact-message")?.focus({ preventScroll: true }); }}>Ask about this project <span aria-hidden="true">↗</span></button>
      </div>
    </div><p className="sr-only" role="status">Showing project preview: {selected.title}.</p>
  </div></section>;
}
