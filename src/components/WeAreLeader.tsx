import Image from "next/image";

export default function WeAreLeader() {
    return (
        <section className="relative min-h-[240px] flex items-center overflow-hidden py-12 sm:py-14">
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

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-6 section-shell text-center lg:text-left">
                <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-6">
                    <div className="w-[64px] h-[64px] sm:w-20 sm:h-20 rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
                        <Image src="/platns_icon.png" alt="growth icon" width={50} height={50} className="w-9 h-9 sm:w-[50px] sm:h-[50px]" />
                    </div>
                    <p className="text-[#344C31] font-livvic font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-xl">
                        Growing a better future together
                    </p>
                </div>

                <a href="#contact" className="motion-button shrink-0 rounded-[20px] bg-[#F7C35F] text-[#1A1A1A] font-livvic text-[15px] font-medium py-4 px-8 sm:py-[25px] sm:px-[50px] hover:bg-[#f7cc35] transition-colors">
                    Let’s talk
                </a>
            </div>
        </section>
    );
}
