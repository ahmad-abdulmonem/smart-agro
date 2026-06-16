"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

const usefulLinks = [
    "New Projects",
    "Our Services",
    "Testimonials",
    "About Us",
    "Contact us",
];

const socials = [
    { name: "Facebook", src: "/facebook_log.png" },
    { name: "Twitter", src: "/twitter_logo.png" },
    { name: "YouTube", src: "/youtube_logo.png" },
    { name: "Instagram", src: "/instagram_logo.png" },
];

function SocialIcons() {
    return (
        <div className="flex items-center gap-[30px]">
            {socials.map((social) => (
                <a
                    key={social.name}
                    href="#"
                    aria-label={social.name}
                    className="w-6 h-6 flex items-center justify-center"
                >
                    <Image
                        src={social.src}
                        alt={social.name}
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                    />
                </a>
            ))}
        </div>
    );
}
export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Subscribe:", email);
    };

    return (
        <footer className="relative bg-[#334B35]">
            <div className="px-[12.5%] py-[90px] flex flex-wrap justify-between gap-y-12 gap-x-10">
                {/* Logo + Description + Socials */}
                <div className="flex flex-col gap-[34px] max-w-[630px]">
                    <div className="flex flex-col gap-[25px]">
                        <Image
                            src="/logo.png"
                            alt="Smart Agro"
                            width={197}
                            height={31}
                        />
                        <p className="text-white font-centuryGothic text-base leading-[25px]">
                            Lorem ipsum dolor sit amet, adipiscing elit. In hac
                            habitasse platea dictumst. Duis porta, quam ut
                            finibus ultrices.
                        </p>
                    </div>

                    <div className="h-px w-full bg-white/20" />

                    <SocialIcons />
                </div>

                {/* Useful Links */}
                <div className="flex flex-col gap-[30px]">
                    <p className="text-white font-livvic text-[22px] font-semibold">
                        Useful Links
                    </p>

                    <div className="flex flex-col gap-5">
                        {usefulLinks.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-white font-centuryGothic text-[15px] hover:text-[#F7C35F] transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-[30px] max-w-[315px]">
                        <p className="text-white font-livvic text-[22px] font-semibold">
                            Newsletter
                        </p>

                        <p className="text-white font-centuryGothic text-base leading-[25px]">
                            Subscribe to our weekly Newsletter and receive
                            updates via email.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubscribe}
                        className="relative w-[315px] h-[55px]"
                    >
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your mail here..."
                            className="w-full h-full rounded-[50px] bg-[#263C28] text-white/50 font-centuryGothic text-sm pl-5 pr-[60px] outline-none focus:ring-1 focus:ring-[#F7C35F]"
                        />

                        <button
                            type="submit"
                            aria-label="Subscribe"
                            className="absolute right-[5px] top-[5px] w-[45px] h-[45px] rounded-full bg-[#F7C35F] flex items-center justify-center text-[#1A1A1A] font-livvic text-[15px] font-medium hover:bg-[#f7cc35] transition-colors"
                        >
                            Go
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="h-px w-full bg-white/20" />

            <div className="px-[12.5%] py-[25px] flex flex-wrap items-center justify-between gap-4">
                <p className="text-white font-centuryGothic text-[15px]">
                    Copyright © Smart Agro. All Rights Reserved.
                </p>

                <div className="flex items-center gap-[25px]">
                    <a
                        href="#"
                        className="text-white font-centuryGothic text-[15px] hover:text-[#F7C35F] transition-colors"
                    >
                        Terms &amp; Conditions
                    </a>

                    <a
                        href="#"
                        className="text-white font-centuryGothic text-[15px] hover:text-[#F7C35F] transition-colors"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
}