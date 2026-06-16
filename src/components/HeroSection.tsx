import Image from "next/image";
import { Livvic } from "next/font/google";

const livvic = Livvic({ subsets: ["latin"], weight: ["700"] });

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center -mt-[80px] lg:-mt-[110px]">
            {/* Background Image */}
            <Image
                src="/hero_section_image.png"
                alt="Hero Background"
                fill
                priority
                className="object-cover"
            />

            {/* Dark Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(to bottom, rgba(38,60,40,0.85) 0%, rgba(38,60,40,0.7) 50%, rgba(38,60,40,0.5) 100%)',
                }}
            />
            <div
                className="absolute inset-0 hidden sm:block"
                style={{
                    background: 'linear-gradient(to right, rgba(38,60,40,1) 0%, rgba(38,60,40,0.8) 40%, rgba(0,0,0,0) 75%, rgba(38,60,40,0.22) 100%)'
                }}
            />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-[12.5%] flex flex-col gap-4 sm:gap-6 mt-20 sm:mt-28 lg:mt-[160px]">

                {/* Original & Natural */}
                <div className="flex flex-col gap-1 w-fit">
                    <p className="text-white text-base sm:text-xl">Original & Natural</p>
                    <div className="w-full h-[2px] bg-white" />
                </div>

                {/* Agriculture Matter + Leaf */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <h1 className={`${livvic.className} text-[#F7C35F] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight`}>
                        Agriculture Matter
                    </h1>
                    <Image
                        src="/golden_leaf_hero_section.png"
                        alt="Leaf"
                        width={80}
                        height={80}
                        className="object-contain w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                    />
                </div>

                {/* Good production */}
                <h2 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold -mt-2 lg:-mt-4 leading-tight">
                    Good production
                </h2>

                {/* Description */}
                <p className="text-white text-sm sm:text-base max-w-lg leading-relaxed">
                    Dissuade ecstatic and properly saw entirely sir why laughter endeavor.
                    In on my jointure horrible margaret suitable he speedily.
                </p>

                {/* Button */}
                <button className="mt-2 w-fit px-8 py-4 sm:px-10 sm:py-5 lg:px-[50px] lg:py-[25px] bg-[#F7C35F] text-black font-bold rounded-[20px] hover:bg-yellow-500 transition">
                    DISCOVER MORE
                </button>
            </div>
        </section>
    );
}