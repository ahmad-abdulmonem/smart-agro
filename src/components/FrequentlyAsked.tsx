const questions = [
  { question: "What can I explore here?", answer: "Browse the sample produce guide, explore farming concepts, watch the field video, and read the field notes. This preview shows the proposed Smart Agro experience." },
  { question: "Can I order produce through this website?", answer: "Ordering is not available in this preview. Products are examples; current availability, varieties, pricing, and delivery details have not been confirmed." },
  { question: "How do I ask about a product or project?", answer: "Select a product or project, then use its inquiry button. Your selection appears in the contact form, where you can add your questions. You can remove a selection without losing your message." },
  { question: "Will my message or email subscription be sent?", answer: "No. Forms let you try the experience and check your entries, but they do not send or save your information. A real contact destination will be connected after the preview stage." },
  { question: "Are the projects completed Smart Agro work?", answer: "The projects are illustrative farming concepts for discussion. They are not presented as completed client work or verified business results." },
];
export default function FrequentlyAsked() {
  return <section id="faq" className="section-space bg-[#263C28]">
    <div className="section-shell grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
      <div><p className="text-sm uppercase tracking-widest text-[#F7C35F]">A little more clarity</p><h2 className="mt-3 font-livvic text-3xl font-bold sm:text-4xl">Good questions.<br />Clear answers.</h2><p className="mt-5 max-w-sm leading-relaxed text-white/75">A few things to know as you explore Smart Agro.</p><a href="#contact" className="mt-5 inline-block py-3 font-bold text-[#F7C35F] underline underline-offset-4">Try the inquiry form</a></div>
      <div className="divide-y divide-white/15 border-y border-white/15">
        {questions.map(({ question, answer }) => <details key={question} className="group py-2"><summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-4 font-bold [&::-webkit-details-marker]:hidden">{question}<span aria-hidden="true" className="shrink-0 text-2xl font-normal text-[#F7C35F] transition-transform group-open:rotate-45">+</span></summary><p className="pb-5 pr-6 leading-relaxed text-white/75">{answer}</p></details>)}
      </div>
    </div>
  </section>;
}
