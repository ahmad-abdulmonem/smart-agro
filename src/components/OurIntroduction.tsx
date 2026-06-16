export default function OurIntroduction() {
    return (
        <section className="relative w-full bg-[#263C28] overflow-hidden px-6 py-16 sm:px-10 sm:py-20 lg:px-[12.5%] lg:py-24">
            <div className="hidden xl:block rounded-[5px] bg-[#F7C35F] w-5 h-[258px] absolute left-[220px] top-[473px]" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center max-w-[1600px] mx-auto">
                {/* Image + stat card */}
                <div className="relative flex flex-col items-center lg:items-start">
                    <img
                        src="/our_intruduction_image.png"
                        className="rounded-[10px] w-full max-w-[420px] sm:max-w-[480px] lg:max-w-full h-auto aspect-[564/651] object-cover"
                        alt="Agriculture introduction"
                    />

                    <div className="relative -mt-16 sm:-mt-20 w-[90%] max-w-[428px] lg:w-full rounded-[10px] bg-[#6D8C54] flex items-center gap-5 sm:gap-6 px-6 py-6">
                        <img
                            src="/our_intruduction_icon.png"
                            className="w-[55px] h-[50px] lg:w-[76px] lg:h-[70px] object-contain shrink-0"
                            alt="Projects completed icon"
                        />
                        <div className="w-px h-[50px] lg:h-[70px] bg-white/20 shrink-0" />
                        <div className="flex flex-col items-start gap-1 lg:gap-[7px] min-w-0">
                            <p className="text-[#FFF] font-mistral text-2xl sm:text-[32px] lg:text-[40px]">
                                86,700
                            </p>
                            <p className="text-[#FFF] font-livvic text-xs sm:text-sm font-medium">
                                Successfully Project Completed
                            </p>
                        </div>
                    </div>
                </div>

                {/* Text content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 lg:gap-10">
                    <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-5">
                        <p className="text-[#FFF] font-centuryGothic text-lg sm:text-xl leading-[30px]">
                            OUR INTRODUCTION
                        </p>
                        <h2 className="text-[#FFF] font-livvic text-3xl sm:text-4xl lg:text-[50px] font-bold">
                            Pure Agriculture and Organic Form
                        </h2>
                    </div>

                    <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-5">
                        <p className="text-[#F7C35F] font-livvic text-xl sm:text-2xl lg:text-3xl font-medium">
                            We&apos;re Leader in Agriculture Market
                        </p>
                        <p className="text-[#FFF] font-centuryGothic text-base lg:text-lg leading-relaxed lg:leading-[27px]">
                            There are many variations of passages of available but the majority
                            have suffered alteration in some form, by injected humou or
                            randomised words even slightly believable.
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-4 lg:gap-5 w-full max-w-[420px] lg:max-w-none">
                        {[
                            "Organic food contains more vitamins",
                            "Eat organic because supply meets demand",
                            "Organic food is never irradiated",
                        ].map((text) => (
                            <div key={text} className="flex items-start gap-4 lg:gap-5 w-full">
                                <img src="/check_mark_golden.png" className="w-6 h-6 shrink-0 mt-0.5" alt="check" />
                                <p className="text-[#FFF] font-livvic text-base sm:text-lg lg:text-xl font-medium leading-snug lg:leading-[27px] text-left">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
