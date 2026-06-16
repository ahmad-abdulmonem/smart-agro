import Image from "next/image";
import { Livvic } from "next/font/google";

const livvic = Livvic({ subsets: ["latin"], weight: ["700"] });

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center -mt-[110px]">
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
                    background: 'linear-gradient(to right, rgba(38,60,40,1) 0%, rgba(38,60,40,0.8) 40%, rgba(0,0,0,0) 75%, rgba(38,60,40,0.22) 100%)'
                }}
            />

            {/* Content */}
            <div className="relative z-10 px-[241px] flex flex-col gap-6 mt-[160px]">

                {/* Original & Natural */}
                <div className="flex flex-col gap-1 w-fit">
                    <p className="text-white text-xl">Original & Natural</p>
                    <div className="w-full h-[2px] bg-white" />
                </div>

                {/* Agriculture Matter + Leaf */}
                <div className="flex items-center gap-4">
                    <h1 className={`${livvic.className} text-[#F7C35F] text-7xl font-bold`}>
                        Agriculture Matter
                    </h1>
                    <Image
                        src="/golden_leaf_hero_section.png"
                        alt="Leaf"
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                </div>

                {/* Good production */}
                <h2 className="text-white text-7xl font-bold -mt-4">
                    Good production
                </h2>

                {/* Description */}
                <p className="text-white text-base max-w-lg">
                    Dissuade ecstatic and properly saw entirely sir why laughter endeavor.
                    In on my jointure horrible margaret suitable he speedily.
                </p>

                {/* Button */}
                <button className="mt-2 w-fit px-[50px] py-[25px] bg-[#F7C35F] text-black font-bold rounded-[20px] hover:bg-yellow-500 transition">
                    DISCOVER MORE
                </button>
            </div>
        </section>
    );
}