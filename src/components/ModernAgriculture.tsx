import Image from "next/image";

export default function ModernAgriculture() {
    return (
        <section className="relative bg-[#6D8C54] overflow-hidden">
            <div className="flex flex-col lg:flex-row items-stretch">
                {/* الصورة */}
                <div className="relative w-full h-[260px] sm:h-[360px] lg:w-[841px] lg:h-[705px] lg:shrink-0">
                    <Image
                        src="/family.png"
                        alt="Family working together in the field"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* المحتوى */}
                <div className="relative flex-1 px-6 py-12 sm:px-10 sm:py-16 lg:py-20 lg:pl-12 lg:pr-16 xl:pl-[109px] xl:pr-[240px]">
                    <p className="text-white font-centuryGothic text-base sm:text-lg lg:text-xl tracking-wide">
                        MODERN AGRICULTURE
                    </p>
                    <h2 className="text-white font-livvic text-3xl sm:text-4xl lg:text-[50px] font-bold leading-tight mt-2">
                        Providing High Quality Products
                    </h2>

                    <div className="flex flex-col gap-10 sm:gap-12 lg:gap-[60px] max-w-[730px] mt-10 sm:mt-14 lg:mt-20">
                        {/* الميزة الأولى */}
                        <div className="flex items-start sm:items-center gap-5 sm:gap-[30px]">
                            <Image
                                src="/platns_icon.png"
                                alt="Agriculture growth icon"
                                width={90}
                                height={90}
                                className="shrink-0 w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] lg:w-[90px] lg:h-[90px]"
                            />
                            <div className="flex flex-col gap-[7px]">
                                <p className="text-white font-livvic text-xl sm:text-2xl font-semibold">
                                    Our Agriculture Growth
                                </p>
                                <p className="text-white font-centuryGothic text-base sm:text-lg leading-relaxed sm:leading-[27px]">
                                    Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu. Metus elit auctor
                                </p>
                            </div>
                        </div>

                        {/* الخط الفاصل */}
                        <div className="h-px w-full bg-white/20" />

                        {/* الميزة الثانية */}
                        <div className="flex items-start sm:items-center gap-5 sm:gap-[30px]">
                            <Image
                                src="/vegs.png"
                                alt="Healthy vegetables icon"
                                width={90}
                                height={90}
                                className="shrink-0 w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] lg:w-[90px] lg:h-[90px]"
                            />
                            <div className="flex flex-col gap-[7px]">
                                <p className="text-white font-livvic text-xl sm:text-2xl font-semibold">
                                    Making Healthy Foods
                                </p>
                                <p className="text-white font-centuryGothic text-base sm:text-lg leading-relaxed sm:leading-[27px]">
                                    Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu. Metus elit auctor interdum scelerisque
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* الزخرفة العلوية اليمنى (ديسكتوب فقط) */}
            <div className="hidden lg:block absolute right-0 top-0 w-[205px] h-[208px] pointer-events-none">
                <div className="absolute left-[31px] top-0 w-[174px] h-44 rounded-[10px] bg-[#678551]" />
                <div className="absolute left-0 top-32 w-[79px] h-20 rounded-[10px] bg-white/[0.15]" />
            </div>

            {/* Organic stamp (xl+ only) */}
            <div className="hidden xl:block absolute left-[780px] top-9 w-[100px] h-[100px]">
                <Image src="/stamp.png" alt="Organic certified" width={100} height={100} />
            </div>
        </section>
    );
}
