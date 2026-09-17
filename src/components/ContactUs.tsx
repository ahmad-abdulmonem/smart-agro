import InquiryForm from "@/components/InquiryForm";
export default function ContactUs() {
  return <section id="contact" className="bg-[#334B35]">
    <div className="section-shell section-space grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div><p className="mb-4 text-[#F7C35F]">Let’s talk agriculture</p><h2 className="farm-heading">Let’s talk.</h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed">Have a question about produce, farming practices, or a potential project? Tell us what you have in mind.</p>

      </div>
      <InquiryForm kind="contact" />
    </div>
  </section>;
}
