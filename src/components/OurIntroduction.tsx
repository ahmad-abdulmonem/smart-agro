export default function OurIntroduction() {
    return (
        <div className="relative w-full bg-[#263C28] overflow-hidden px-6 py-16 sm:px-10 sm:py-20 lg:px-0 lg:py-0 lg:min-h-[910px]">
            {/* Decorative background block (desktop only, matches Figma) */}
            <div className="hidden lg:block bg-[#263C28] w-[658px] h-[497px] absolute left-0 top-0" />
            <div className="hidden lg:block rounded-[5px] bg-[#F7C35F] w-5 h-[258px] absolute left-[220px] top-[473px]" />

            <div className="flex flex-col items-center gap-12 lg:contents">
                {/* Main image */}
                <img
                    src="/our_intruduction_image.png"
                    className="rounded-[10px] w-full max-w-[420px] sm:max-w-[480px] h-auto aspect-[564/651] object-cover lg:w-[564px] lg:h-[651px] lg:max-w-none lg:absolute lg:left-60 lg:top-[100px]"
                    alt="image 6"
                />

                {/* Stat card */}
                <div className="relative -mt-16 sm:-mt-20 w-[90%] max-w-[428px] lg:w-[428px] lg:h-[140px] lg:mt-0 lg:max-w-none lg:absolute lg:left-[299px] lg:top-[670px] rounded-[10px] bg-[#6D8C54] flex items-center gap-5 sm:gap-6 px-6 py-6 lg:px-0 lg:py-0">
                    <img
                        src="/our_intruduction_icon.png"
                        className="w-[55px] h-[50px] lg:w-[76px] lg:h-[70px] object-contain shrink-0 lg:absolute lg:left-[35px] lg:top-8"
                        alt="icon"
                    />
                    <div className="w-px h-[50px] lg:h-[70px] bg-white/20 shrink-0 lg:absolute lg:left-[131px] lg:top-8" />
                    <div className="flex flex-col items-start gap-1 lg:gap-[7px] lg:absolute lg:left-[163px] lg:top-[35px]">
                        <p className="text-[#FFF] font-mistral text-2xl sm:text-[32px] lg:text-[40px]">
                            86,700
                        </p>
                        <p className="text-[#FFF] font-livvic text-xs sm:text-sm font-medium whitespace-nowrap">
                            Successfully Project Completed
                        </p>
                    </div>
                </div>

                {/* Text content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-10 lg:gap-[55px] w-full max-w-[700px] lg:max-w-none lg:w-auto lg:absolute lg:left-[884px] lg:top-[119px]">
                    <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-5 lg:absolute lg:left-0 lg:top-0">
                        <p className="text-[#FFF] font-centuryGothic text-lg sm:text-xl leading-[30px] lg:whitespace-nowrap">
                            OUR INTRODUCTION
                        </p>
                        <h2 className="text-[#FFF] font-livvic text-3xl sm:text-4xl lg:text-[50px] font-bold lg:w-[524px]">
                            Pure Agriculture and Organic Form
                        </h2>
                    </div>
                    <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-5 lg:absolute lg:left-0 lg:top-[231px]">
                        <p className="text-[#F7C35F] font-livvic text-xl sm:text-2xl lg:text-3xl font-medium lg:whitespace-nowrap">
                            We&apos;re Leader in Agriculture Market
                        </p>
                        <p className="text-[#FFF] font-centuryGothic text-base lg:text-lg leading-relaxed lg:leading-[27px] lg:w-[796px]">
                            There are many variations of passages of available but the majority
                            have suffered alteration in some form, by injected humou or
                            randomised words even slightly believable.
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-4 lg:gap-5 w-full max-w-[420px] lg:w-auto lg:max-w-none lg:absolute lg:left-0 lg:top-[398px]">
                        <div className="flex items-center gap-4 lg:gap-5 w-fit">
                            <img src="/check_mark_golden.png" className="w-6 h-6 shrink-0" alt="check" />
                            <p className="text-[#FFF] font-livvic text-base sm:text-lg lg:text-xl font-medium leading-snug lg:leading-[27px] text-left lg:whitespace-nowrap">
                                Organic food contains more vitamins
                            </p>
                        </div>
                        <div className="flex items-center gap-4 lg:gap-5 w-fit">
                            <img src="/check_mark_golden.png" className="w-6 h-6 shrink-0" alt="check" />
                            <p className="text-[#FFF] font-livvic text-base sm:text-lg lg:text-xl font-medium leading-snug lg:leading-[27px] text-left lg:whitespace-nowrap">
                                Eat organic because supply meets demand
                            </p>
                        </div>
                        <div className="flex items-center gap-4 lg:gap-5 w-fit">
                            <img src="/check_mark_golden.png" className="w-6 h-6 shrink-0" alt="check" />
                            <p className="text-[#FFF] font-livvic text-base sm:text-lg lg:text-xl font-medium leading-snug lg:leading-[27px] text-left lg:whitespace-nowrap">
                                Organic food is never irradiated
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
