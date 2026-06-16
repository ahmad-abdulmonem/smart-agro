export default function OurIntroduction() {
    return (
        <div className="relative w-full min-h-[910px] bg-[#263C28] overflow-hidden">
            <div className="bg-[#263C28] w-[658px] h-[497px] absolute left-0 top-0"></div>
            <div className="rounded-[5px] bg-[#F7C35F] w-5 h-[258px] absolute left-[220px] top-[473px]"></div>
            <img
                src="/our_intruduction_image.png"
                className="rounded-[10px] w-[564px] h-[651px] absolute left-60 top-[100px] max-w-none"
                alt="image 6"
            />
            <div className="w-[428px] h-[140px] absolute left-[299px] top-[670px]">
                <div className="rounded-[10px] bg-[#6D8C54] w-[428px] h-[140px] absolute left-0 top-0"></div>

                <img
                    src="/our_intruduction_icon.png"
                    className="w-[76px] h-[70px] absolute left-[35px] top-8 object-contain"
                    alt="icon"
                />
                <img
                    src="/line.png"
                    className="w-[1px] h-[70px] absolute left-[131px] top-8 object-contain"
                    alt="line"
                />

                <div className="bg-[rgba(255,255,255,0.20)] w-[77px] absolute left-[131px] top-8"></div>

                <div className="inline-flex flex-col items-start gap-[7px] absolute left-[163px] top-[35px]">
                    <p className="text-[#FFF] font-mistral text-[40px] absolute left-0 top-0">
                        86,700
                    </p>
                    <p className="text-[#FFF] font-livvic text-sm font-medium absolute left-0 top-[47px] whitespace-nowrap">
                        Successfully Project Completed
                    </p>
                </div>
            </div>

            <div className="inline-flex flex-col items-start gap-[55px] absolute left-[884px] top-[119px]">
                <div className="flex flex-col items-start gap-5 absolute left-0 top-0">
                    <p className="text-[#FFF] font-centuryGothic text-xl leading-[30px] w-fit whitespace-nowrap">
                        OUR INTRODUCTION
                    </p>
                    <p className="text-[#FFF] font-livvic text-[50px] font-bold w-[524px]">
                        Pure Agriculture and Organic Form
                    </p>
                </div>
                <div className="flex flex-col items-start gap-5 absolute left-0 top-[231px]">
                    <p className="text-[#F7C35F] font-livvic text-3xl font-medium w-fit whitespace-nowrap">
                        We're Leader in Agriculture Market
                    </p>
                    <p className="text-[#FFF] font-centuryGothic text-lg leading-[27px] w-[796px]">
                        There are many variations of passages of available but the majority
                        have suffered alteration in some form, by injected humou or
                        randomised words even slightly believable.
                    </p>
                </div>
                <div className="flex flex-col items-start gap-5 absolute left-0 top-[398px]">
                    <div className="flex items-center gap-5 w-fit">
                        <img src="/check_mark_golden.png" className="w-6 h-6" alt="check" />
                        <p className="text-[#FFF] font-livvic text-xl font-medium leading-[27px] whitespace-nowrap">
                            Organic food contains more vitamins
                        </p>
                    </div>
                    <div className="flex items-center gap-5 w-fit">
                        <img src="/check_mark_golden.png" className="w-6 h-6" alt="check" />
                        <p className="text-[#FFF] font-livvic text-xl font-medium leading-[27px] whitespace-nowrap">
                            Eat organic because supply meets demand
                        </p>
                    </div>
                    <div className="flex items-center gap-5 w-fit">
                        <img src="/check_mark_golden.png" className="w-6 h-6" alt="check" />
                        <p className="text-[#FFF] font-livvic text-xl font-medium leading-[27px] whitespace-nowrap">
                            Organic food is never irradiated
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}