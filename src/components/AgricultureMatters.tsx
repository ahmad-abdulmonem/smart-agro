export default function AgricultureMatters() {
    return (
        <section className="relative w-full h-[460px] sm:h-[560px] lg:h-[694px] flex items-center overflow-hidden">
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
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-8 px-6 text-center lg:flex-row lg:items-center lg:justify-start lg:text-left lg:px-0">

                {/* Text */}
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug max-w-md lg:ml-[120px]">
                    Agriculture Matters to <br /> the Future of Bangladesh
                </h2>

                {/* Play button */}
                <div className="flex flex-col items-center gap-3 lg:absolute lg:left-[1258px] lg:top-1/2 lg:-translate-y-1/2">
                    <img
                        src="/play_btn_2.png"
                        alt="Play"
                        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-[130px] lg:h-[130px] object-contain cursor-pointer hover:scale-105 transition"
                    />
                    <p
                        className="text-[#F7C35F] text-base lg:text-lg italic"
                        style={{ fontFamily: "'Johnstown Demo', cursive" }}
                    >
                        Watch the video
                    </p>
                </div>
            </div>
        </section>
    );
}
