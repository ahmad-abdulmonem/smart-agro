"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
    image: string;
    quote: string;
    name: string;
    role: string;
}

const testimonials: Testimonial[] = [
    {
        image: "/personal_1.png",
        quote:
            "Lorem ipsum dolor sit amet consectetur. Tortor tempus cursus leo dictumst elementum. Sagittis elit turpis dignissim turpis tristique venenatis. Tempor id commodo odio nunc id volutpat libero. Ut hendrerit malesuada netus sapien dictum sapien nibh. Cras laoreet risus mus mi commodo volutpat quis neque. Scelerisque at in in id donec ornare velit. Posuere amet lobortis volutpat purus mauris. Tortor magna non turpis ultricies iaculis rhoncus. Volutpat luctus proin pellentesque platea.",
        name: "Tyrese Gibson",
        role: "Customer",
    },
    {
        image: "/personal_2.png",
        quote:
            "Lorem ipsum dolor sit amet consectetur. Tortor tempus cursus leo dictumst elementum. Sagittis elit turpis dignissim turpis tristique venenatis. Tempor id commodo odio nunc id volutpat libero. Ut hendrerit malesuada netus sapien dictum sapien nibh.",
        name: "Sarah Johnson",
        role: "Customer",
    },
    {
        image: "/personal_3.png",
        quote:
            "Lorem ipsum dolor sit amet consectetur. Tortor tempus cursus leo dictumst elementum. Sagittis elit turpis dignissim turpis tristique venenatis. Tempor id commodo odio nunc id volutpat libero.",
        name: "Michael Reed",
        role: "Customer",
    },
    {
        image: "/personal_4.png",
        quote:
            "Lorem ipsum dolor sit amet consectetur. Tortor tempus cursus leo dictumst elementum. Sagittis elit turpis dignissim turpis tristique venenatis.",
        name: "Emma Williams",
        role: "Customer",
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const current = testimonials[activeIndex];

    return (
        <section className="relative bg-[#263C28] overflow-hidden py-16 sm:py-20 lg:py-[100px]">
            {/* الخلفية المخططة */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(90deg, transparent 0px, transparent 95px, rgba(255,255,255,0.03) 95px, rgba(255,255,255,0.03) 97px)",
                }}
            />

            <div className="relative z-10 px-[12.5%]">
                {/* العنوان */}
                <div className="text-center">
                    <p className="text-[#ACACAC] text-sm tracking-[3px] uppercase mb-4">
                        Our Testimonials
                    </p>
                    <h2 className="text-white font-bold text-2xl sm:text-4xl md:text-5xl uppercase">
                        What They&apos;re Taking About
                    </h2>
                    <div className="w-12 h-[2px] bg-[#F7C35F] mx-auto mt-6" />
                </div>

                {/* المحتوى */}
                <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-14 mt-12 sm:mt-16 md:mt-20">
                    {/* الصورة + علامة التنصيص */}
                    <div className="relative shrink-0 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] mx-auto md:mx-0">
                        <div
                            key={activeIndex}
                            className="w-full h-full rounded-full overflow-hidden transition-opacity duration-500"
                        >
                            <Image
                                src={current.image}
                                alt={current.name}
                                width={280}
                                height={280}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <Image
                            src="/fontisto_quote-right.png"
                            alt="quote"
                            width={45}
                            height={45}
                            className="absolute top-1 right-9"
                        />
                    </div>

                    {/* النص */}
                    <div
                        key={`text-${activeIndex}`}
                        className="relative max-w-xl transition-opacity duration-500"
                    >
                        <p className="text-white/80 leading-[1.8] text-[15px]">
                            &quot;{current.quote}&quot;
                        </p>
                        <h4 className="text-white font-bold mt-6">{current.name}</h4>
                        <p className="text-[#CCCCCC] text-sm">{current.role}</p>
                    </div>
                </div>

                {/* مؤشرات الكاروسيل */}
                <div className="flex justify-center gap-2 mt-16">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Testimonial ${index + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                ? "w-6 bg-[#F7C35F]"
                                : "w-2 bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}