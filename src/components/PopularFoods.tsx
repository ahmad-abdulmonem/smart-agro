"use client";
import { useState } from "react";
import Image from "next/image";
import { products, ProductName } from "@/lib/products";
import { useProductInquiry } from "@/components/ProductInquiryProvider";
export default function PopularFoods() {
  const [selectedFood, setSelectedFood] = useState<ProductName>("Strawberry");
  const selected = products.find(product => product.name === selectedFood)!;
  const { setProduct } = useProductInquiry();
  return <section id="products" className="farm-produce section-space"><div className="section-shell">
    <div className="farm-section-top"><h2 className="farm-heading">Fresh from<br />the growing world.</h2><p>Fruit, vegetables, and a little<br />inspiration for your table.</p></div>
    <div className="farm-produce-layout">
      <div className="farm-produce-photo"><Image src="/slider_2.png" alt="A market display of colorful fruit and vegetables" fill sizes="(max-width: 767px) 90vw, 45vw" className="object-cover" /></div>
      <div className="farm-produce-guide">
        <div role="group" aria-label="Select a fruit or vegetable" className="farm-produce-selector">{products.map(food => <button key={food.name} type="button" aria-pressed={selectedFood === food.name} aria-controls="product-details" onClick={() => setSelectedFood(food.name)} className="farm-produce-choice"><Image src={food.icon} alt="" width={32} height={32} /><span>{food.name}</span></button>)}</div>
        <div id="product-details" key={selected.name} className="product-detail farm-produce-detail"><p className="farm-caption">{selected.category}</p><h3>{selected.name}</h3><p className="farm-body">{selected.description}</p><dl><div><dt>Flavor</dt><dd>{selected.character}</dd></div><div><dt>At the table</dt><dd>{selected.uses}</dd></div></dl>
          <button type="button" className="farm-link" onClick={() => { setProduct(selected.name); document.getElementById("contact")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); document.getElementById("contact-message")?.focus({ preventScroll: true }); }}>Ask about this product<span className="sr-only">: {selected.name}</span><span aria-hidden="true">↗</span></button>
        </div>
      </div>
    </div><p className="sr-only" role="status">Showing details for {selected.name}.</p>
  </div></section>;
}
