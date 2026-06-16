export default function AgricultureMatters() {
    return (
        <section className="relative w-full min-h-[460px] sm:min-h-[560px] lg:min-h-[694px] flex items-center overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/VideoBannerStockVideos-RuralFarmingAgricultureNature.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 w-full flex flex-col items-center justify-center gap-8 px-6 sm:px-10 lg:px-[12.5%] py-16 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug max-w-md lg:max-w-lg">
                    Agriculture Matters to <br className="hidden sm:block" /> the Future of Bangladesh
                </h2>

                <div className="flex flex-col items-center gap-3 shrink-0">
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
