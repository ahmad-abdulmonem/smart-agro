"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Our Products" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 z-20 w-full bg-[#334B35]/80 px-6 sm:px-10 lg:px-[12.5%] h-[80px] lg:h-[110px] flex items-center justify-between">
            {/* Logo */}
            <Image
                src="/logo.png"
                alt="Smart Agro Logo"
                width={197}
                height={31}
                priority
                className="object-contain w-[140px] lg:w-[197px] h-auto [filter:drop-shadow(0px_4px_4px_rgba(0,0,0,0.25))]"
            />

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-[50px]">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={`text-[18px] font-normal leading-[30px] transition pb-1 inline-block ${pathname === link.href
                                    ? "text-[#F7C35F] border-b-2 border-[#F7C35F]"
                                    : "text-white hover:text-[#F7C35F]"
                                }`}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile menu button */}
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="lg:hidden relative z-30 flex h-10 w-10 flex-col items-center justify-center gap-[6px]"
            >
                <span
                    className={`block h-[2px] w-6 bg-white transition-all duration-300 ${isOpen ? "translate-y-[8px] rotate-45" : ""
                        }`}
                />
                <span
                    className={`block h-[2px] w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                        }`}
                />
                <span
                    className={`block h-[2px] w-6 bg-white transition-all duration-300 ${isOpen ? "-translate-y-[8px] -rotate-45" : ""
                        }`}
                />
            </button>

            {/* Mobile menu panel */}
            <div
                className={`lg:hidden absolute left-0 top-[80px] w-full overflow-hidden bg-[#263C28] shadow-xl transition-all duration-300 ease-in-out ${isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col px-6 py-4">
                    {links.map((link) => (
                        <li key={link.href} className="border-b border-white/10 last:border-none">
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block py-3 text-[16px] font-normal transition ${pathname === link.href
                                        ? "text-[#F7C35F]"
                                        : "text-white hover:text-[#F7C35F]"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
