"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { navigation } from "@/lib/navigation";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return <header className="absolute inset-x-0 top-0 z-20 bg-[#334B35]/95">
    <a href="#main" className="skip-link">Skip to content</a>
    <nav aria-label="Main navigation" className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-6 sm:px-10 xl:h-24 xl:px-10" onKeyDown={(event) => { if (event.key === "Escape" && isOpen) { setIsOpen(false); toggle.current?.focus(); } }}>
      <a href="#home" aria-label="Smart Agro home" className="shrink-0" onClick={() => setIsOpen(false)}><Image src="/logo.png" alt="Smart Agro" width={197} height={31} preload className="h-auto w-[150px] xl:w-[197px]" /></a>
      <ul className="hidden items-center gap-6 xl:flex">{navigation.map((link) => <li key={link.href}><a href={link.href} className="whitespace-nowrap py-3 text-base hover:text-[#F7C35F]">{link.label}</a></li>)}</ul>
      <button ref={toggle} type="button" aria-controls="mobile-menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)} className="min-h-11 rounded-lg border border-white/30 px-4 xl:hidden">{isOpen ? "Close menu" : "Menu"}</button>
      <div id="mobile-menu" hidden={!isOpen} className="absolute inset-x-0 top-20 max-h-[calc(100dvh-5rem)] overflow-y-auto bg-[#263C28] shadow-xl xl:hidden"><ul className="px-6 py-4">{navigation.map((link) => <li key={link.href}><a href={link.href} onClick={() => setIsOpen(false)} className="block border-b border-white/10 py-3 hover:text-[#F7C35F]">{link.label}</a></li>)}</ul></div>
    </nav>
  </header>;
}
