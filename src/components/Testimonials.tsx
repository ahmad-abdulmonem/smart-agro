const priorities = [
  { title: "Care for the land", text: "Every growing season begins with the soil. Thoughtful farming keeps the next harvest in mind." },
  { title: "Celebrate the season", text: "Discover the variety of fruits and vegetables each season brings to the table." },
  { title: "Grow connections", text: "Bring people closer to the fields, ideas, and everyday work behind their food." },
];
export default function Testimonials() {
  return <section className="section-space bg-[#334B35]/40" aria-labelledby="priorities-title">
    <div className="section-shell"><p className="mb-4 text-center text-sm uppercase tracking-widest text-[#F7C35F]">Our priorities</p><h2 id="priorities-title" className="text-center font-livvic text-3xl font-bold sm:text-4xl">A thoughtful approach to growing</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-3">{priorities.map((item) => <div key={item.title} className="border-t border-[#F7C35F]/50 pt-6"><h3 className="mb-4 text-xl font-bold">{item.title}</h3><p className="leading-relaxed text-white/80">{item.text}</p></div>)}</div>
    </div>
  </section>;
}
