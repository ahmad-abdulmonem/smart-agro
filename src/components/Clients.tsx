import Image from "next/image";

const logos = [
    "/figma_logo.png",
    "/figma_logo.png",
    "/figma_logo.png",
    "/figma_logo.png",
    "/figma_logo.png",
    "/figma_logo.png",
];

export default function Clients() {
    const isSlider = logos.length > 5;
    const displayLogos = isSlider ? [...logos, ...logos] : logos;

    return (
        <section className="bg-[#263C28] border-t border-white/20 py-[100px] overflow-hidden">
            <div
                className={
                    isSlider
                        ? "flex items-center gap-6 w-max animate-marquee hover:[animation-play-state:paused]"
                        : "flex items-center justify-center gap-6 px-[12.5%]"
                }
            >
                {displayLogos.map((logo, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center w-[220px] h-[95px] shrink-0"
                    >
                        <Image
                            src={logo}
                            alt={`Client logo ${(index % logos.length) + 1}`}
                            width={140}
                            height={50}
                            className="object-contain opacity-40 hover:opacity-100 transition-opacity"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}