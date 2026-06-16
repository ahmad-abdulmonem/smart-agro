import Image from "next/image";

export default function AgricultureMatters() {
    return (
        <section className="relative w-full h-[694px] flex items-center overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/VideoBannerStockVideos-RuralFarmingAgricultureNature.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 w-full h-full flex items-center">

                {/* Text */}
                <h2 className="text-white text-4xl font-bold leading-snug max-w-md ml-[120px]">
                    Agriculture Matters to <br /> the Future of Bangladesh
                </h2>

                {/* Play button */}
                {/* Play button */}
                <div className="absolute left-[1258px] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
                    <img
                        src="/play_btn_2.png"
                        alt="Play"
                        className="w-[130px] h-[130px] object-contain cursor-pointer hover:scale-105 transition"
                    />
                    <p
                        className="text-[#F7C35F] text-lg italic"
                        style={{ fontFamily: "'Johnstown Demo', cursive" }}
                    >
                        Watch the video
                    </p>
                </div>
            </div>
        </section>
    );
}