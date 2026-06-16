"use client";

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

    return (
        <nav className="absolute top-0 left-0 z-20 w-full bg-[#334B35]/80 px-[12.5%] h-[110px] flex items-center justify-between">
            {/* Logo */}
            <Image
                src="/logo.png"
                alt="Smart Agro Logo"
                width={197}
                height={31}
                priority
                className="object-contain [filter:drop-shadow(0px_4px_4px_rgba(0,0,0,0.25))]"
            />

            {/* Links */}
            <ul className="flex items-center gap-[50px]">
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
        </nav>
    );
}