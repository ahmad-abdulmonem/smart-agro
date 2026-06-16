import Image from "next/image";

const foods = [
    { name: "Apple", icon: "/Icon_Apple.png" },
    { name: "Blueberry", icon: "/blueberry.png" },
    { name: "Strawberry", icon: "/icon-Strawberry.png", active: true },
    { name: "Eggplant", icon: "/eggplant.png" },
    { name: "Cabbage", icon: "/cabbage.png" },
    { name: "carrot", icon: "/carrot.png" },
];

export default function PopularFoods() {
    return (
        <section className="w-full bg-[#263C28] py-16 sm:py-20 flex flex-col items-center gap-10 sm:gap-12 px-6">

            {/* Title */}
            <div className="flex flex-col items-center gap-3 text-center">
                <p className="text-white text-sm tracking-widest uppercase">
                    Popular Foods And Vegetables
                </p>
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
                    Quality Fruits &amp; Vegetables
                </h2>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {foods.map((food) => (
                    <div
                        key={food.name}
                        className={`flex flex-col items-center gap-3 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] justify-center rounded-xl ${food.active ? "bg-[#F7C35F]" : "bg-white/10"
                            }`}
                    >
                        <Image src={food.icon} alt={food.name} width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                        <p
                            className={`text-xs sm:text-sm font-medium ${food.active ? "text-black" : "text-white"
                                }`}
                        >
                            {food.name}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
}
