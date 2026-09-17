import Image from "next/image";
import InquiryForm from "@/components/InquiryForm";
import { navigation } from "@/lib/navigation";
export default function Footer() {
  return <footer className="bg-[#334B35]">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 md:grid-cols-2 lg:grid-cols-3">
      <div><a href="#home" aria-label="Smart Agro home"><Image src="/logo.png" alt="Smart Agro" width={197} height={31} /></a><p className="mt-6 leading-relaxed text-white/80">A closer connection to agriculture, seasonal produce, and the work that brings food from field to table.</p></div>
      <nav aria-label="Footer navigation"><h2 className="mb-6 text-xl font-bold">Explore Smart Agro</h2><ul className="space-y-2">{navigation.slice(1).map((link) => <li key={link.href}><a href={link.href} className="inline-block py-2 hover:text-[#F7C35F]">{link.label}</a></li>)}</ul></nav>
      <div className="md:col-span-2 lg:col-span-1"><h2 className="mb-4 text-xl font-bold">Notes from the field</h2><p className="mb-6 text-white/80">Sign up for agriculture stories and produce updates by email.</p><InquiryForm kind="newsletter" /></div>
    </div><div className="border-t border-white/20 px-6 py-6 text-center text-sm">© Smart Agro. All rights reserved.</div>
  </footer>;
}
