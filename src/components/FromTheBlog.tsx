import Image from "next/image";
const notes = [
  { image: "/Image26.png", title: "At harvest time", summary: "The moment a growing season comes together.", text: "Harvest brings months of work into focus. Timing, weather, and careful handling all shape the journey from a growing crop to gathered produce." },
  { image: "/Image26_1_.png", title: "Life on the farm", summary: "The daily work behind the farm gate.", text: "Farm life follows a daily rhythm. Looking after animals, maintaining equipment, and observing the land are all part of the work that continues between planting and harvest." },
  { image: "/Image26_2_.png", title: "Under the greenhouse roof", summary: "A different space for things to grow.", text: "A greenhouse creates a sheltered growing space. Light, airflow, water, and temperature still need attention, with the approach shaped by the plants growing inside." },
];
export default function FromTheBlog() {
  return <section id="news" className="section-space bg-[#263C28]"><div className="section-shell">
    <p className="farm-caption">From the field</p><h2 className="farm-heading">Field notes.</h2>
    <div className="farm-notes-grid">{notes.map((note) => <article key={note.title} className="farm-note">
      <div className="relative aspect-[4/3]"><Image src={note.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>
      <div className="farm-note-copy"><h3 className="font-livvic text-xl font-bold">{note.title}</h3><p className="mt-4 leading-relaxed text-white/80">{note.summary}</p><details className="mt-6"><summary className="cursor-pointer py-2 font-bold text-[#F7C35F]">Read field note<span className="sr-only">: {note.title}</span></summary><p className="mt-4 leading-relaxed text-white/80">{note.text}</p></details></div>
    </article>)}</div>
  </div></section>;
}
