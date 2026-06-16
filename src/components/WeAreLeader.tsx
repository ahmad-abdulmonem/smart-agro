import Image from "next/image";

export default function WeAreLeader() {
    return (
        <section className="relative min-h-[313px] flex items-center overflow-hidden">
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

            <div className="relative z-10 flex items-center justify-between w-full px-[12.5%]">
                <div className="flex items-center gap-[50px]">
                    <div className="w-[90px] h-[90px] rounded-full bg-[#1A1A1A] flex items-center justify-center shrink-0">
                        <Image src="/platns_icon.png" alt="growth icon" width={50} height={50} />
                    </div>
                    <p className="text-[#344C31] font-johnstownDemo text-[50px]">
                        We are Leader in Agriculture Market
                    </p>
                </div>

                <button className="shrink-0 rounded-[20px] bg-[#F7C35F] text-[#1A1A1A] font-livvic text-[15px] font-medium py-[25px] px-[50px] hover:bg-[#f7cc35] transition-colors">
                    Discover More
                </button>
            </div>
        </section>
    );
}