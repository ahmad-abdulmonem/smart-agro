import Image from "next/image";

export default function WeAreLeader() {
    return (
        <section className="relative min-h-[280px] sm:min-h-[313px] flex items-center overflow-hidden py-10 sm:py-0">
            {/* خلفية الرسم التوضيحي */}
            <div className="absolute inset-0">
                <Image src="/Style_2.png" alt="" fill className="object-cover" />
            </div>
            {/* التدرج الذهبي فوق الخلفية */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(92deg, rgba(248,204,119,0.80) 44.78%, rgba(248,204,119,0.16) 104.31%)",
                }}
            />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-8 sm:gap-6 w-full px-6 sm:px-10 lg:px-[12.5%] text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-[50px]">
                    <div className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
                        <Image src="/platns_icon.png" alt="growth icon" width={50} height={50} className="w-9 h-9 sm:w-[50px] sm:h-[50px]" />
                    </div>
                    <p className="text-[#344C31] font-johnstownDemo text-2xl sm:text-3xl lg:text-[50px]">
                        We are Leader in Agriculture Market
                    </p>
                </div>

                <button className="shrink-0 rounded-[20px] bg-[#F7C35F] text-[#1A1A1A] font-livvic text-[15px] font-medium py-4 px-8 sm:py-[25px] sm:px-[50px] hover:bg-[#f7cc35] transition-colors">
                    Discover More
                </button>
            </div>
        </section>
    );
}
