import Image from "next/image";

export default function ModernAgriculture() {
    return (
        <section className="relative bg-[#6D8C54] overflow-hidden">
            <div className="flex items-stretch">
                {/* الصورة */}
                <div className="relative w-[841px] h-[705px] shrink-0">
                    <Image
                        src="/family.png"
                        alt="Family working together in the field"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* المحتوى */}
                <div className="relative flex-1 pt-20 pl-[109px] pr-[240px]">
                    <p className="text-white font-centuryGothic text-xl tracking-wide">
                        MODERN AGRICULTURE
                    </p>
                    <h2 className="text-white font-livvic text-[50px] font-bold leading-tight mt-2">
                        Providing High Quality Products
                    </h2>

                    <div className="flex flex-col gap-[60px] max-w-[730px] mt-20">
                        {/* الميزة الأولى */}
                        <div className="flex items-center gap-[30px]">
                            <Image
                                src="/platns_icon.png"
                                alt="Agriculture growth icon"
                                width={90}
                                height={90}
                                className="shrink-0"
                            />
                            <div className="flex flex-col gap-[7px]">
                                <p className="text-white font-livvic text-2xl font-semibold">
                                    Our Agriculture Growth
                                </p>
                                <p className="text-white font-centuryGothic text-lg leading-[27px]">
                                    Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu. Metus elit auctor
                                </p>
                            </div>
                        </div>

                        {/* الخط الفاصل */}
                        <div className="h-px w-full bg-white/20" />

                        {/* الميزة الثانية */}
                        <div className="flex items-center gap-[30px]">
                            <Image
                                src="/vegs.png"
                                alt="Healthy vegetables icon"
                                width={90}
                                height={90}
                                className="shrink-0"
                            />
                            <div className="flex flex-col gap-[7px]">
                                <p className="text-white font-livvic text-2xl font-semibold">
                                    Making Healthy Foods
                                </p>
                                <p className="text-white font-centuryGothic text-lg leading-[27px]">
                                    Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu. Metus elit auctor interdum scelerisque
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* الزخرفة العلوية اليمنى */}
            <div className="absolute right-0 top-0 w-[205px] h-[208px] pointer-events-none">
                <div className="absolute left-[31px] top-0 w-[174px] h-44 rounded-[10px] bg-[#678551]" />
                <div className="absolute left-0 top-32 w-[79px] h-20 rounded-[10px] bg-white/[0.15]" />
            </div>

            {/* شعار Organic */}
            <div className="absolute left-[780px] top-9 w-[100px] h-[100px]">
                <Image src="/stamp.png" alt="Organic certified" width={100} height={100} />
            </div>
        </section>
    );
}