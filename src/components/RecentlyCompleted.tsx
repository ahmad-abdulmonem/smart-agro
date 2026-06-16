"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const baseProjects = [
    { image: "/slider_1.png", category: "AGRICULTURE", title: "Sustainable Farming Methods" },
    { image: "/slider_2.png", category: "AGRICULTURE", title: "Natural Way Of Agriculture" },
    { image: "/slider_3.png", category: "AGRICULTURE", title: "Hand Picked Harvest" },
    { image: "/slider_4.png", category: "AGRICULTURE", title: "Modern Farm Equipment" },
];

const projects = [...baseProjects, ...baseProjects];

export default function RecentlyCompleted() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideStep, setSlideStep] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const totalSlides = baseProjects.length;

    // Measure the real rendered width of a card + gap so the slide distance
    // always matches the current breakpoint, instead of a hardcoded px value.
    useEffect(() => {
        const measure = () => {
            const track = trackRef.current;
            const firstCard = track?.children[0] as HTMLElement | undefined;
            if (!track || !firstCard) return;
            const gap = parseFloat(getComputedStyle(track).columnGap || "0");
            setSlideStep(firstCard.offsetWidth + gap);
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % totalSlides);
        }, 4000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <section className="w-full bg-[#263C28] py-16 sm:py-20 flex flex-col items-center gap-10 sm:gap-12 overflow-hidden">

            {/* Title */}
            <div className="flex flex-col items-center gap-3 px-6 text-center">
                <p className="text-white text-sm tracking-widest uppercase">
                    Recently Completed Work
                </p>
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
                    Explore Our Projects
                </h2>
            </div>

            {/* Slider container */}
            <div className="w-full max-w-[1392px] overflow-hidden py-6 px-6 sm:px-10 lg:px-0">
                <div
                    ref={trackRef}
                    className="flex gap-4 sm:gap-6 transition-transform duration-700 ease-in-out items-center"
                    style={{ transform: `translateX(-${activeIndex * slideStep}px)` }}
                >
                    {projects.map((project, index) => {
                        const isActive = index === activeIndex + 1;

                        return (
                            <div
                                key={index}
                                className={`group relative w-[85vw] max-w-[318px] sm:w-[340px] lg:w-[318px] h-[260px] sm:h-[320px] lg:h-[350px] rounded-[10px] overflow-hidden cursor-pointer flex-shrink-0
                                            border transition-all duration-500 ${isActive
                                        ? "border-[#F7C35F] scale-105 sm:scale-110 z-10"
                                        : "border-transparent scale-100"
                                    }`}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />

                                {isActive && (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-center justify-between">
                                            <div>
                                                <p className="text-[#F7C35F] text-xs tracking-widest mb-1">
                                                    {project.category}
                                                </p>
                                                <p className="text-white font-semibold text-sm sm:text-base">{project.title}</p>
                                            </div>
                                            <img
                                                src="/material-symbols_line-start-arrow-notch.png"
                                                alt="arrow"
                                                className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-4">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2.5 rounded-full transition-all ${activeIndex === index ? "bg-[#F7C35F] w-6" : "bg-white/40 w-2.5"
                            }`}
                    />
                ))}
            </div>

        </section>
    );
}
