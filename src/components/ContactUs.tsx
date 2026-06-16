"use client";

import { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
    name: string;
    phone: string;
    email: string;
    message: string;
}

export default function ContactUs() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: ربط الفورم بـ API route أو خدمة إيميل لاحقاً
        console.log(formData);
    };

    return (
        <section className="relative bg-[#334B35] overflow-hidden">
            {/* الخلفية المخططة */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(90deg, transparent 0px, transparent 95px, rgba(255,255,255,0.03) 95px, rgba(255,255,255,0.03) 97px)",
                }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row gap-[133px] py-[100px] px-[12.5%]">
                {/* معلومات التواصل */}
                <div className="flex flex-col gap-[45px]">
                    <div className="flex flex-col gap-5">
                        <p className="text-white font-centuryGothic text-xl">Contact Now</p>
                        <h2 className="text-white font-livvic text-[50px] font-bold">
                            GET IN TOUCH NOW
                        </h2>
                    </div>
                    <p className="text-white font-centuryGothic text-lg leading-[27px] max-w-[643px]">
                        Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea
                        dictumst. Duis porta, quam ut finibus ultrices.
                    </p>

                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-[7px]">
                            <p className="text-white font-centuryGothic text-sm">Phone</p>
                            <div className="flex flex-col gap-[10px]">
                                <p className="text-white font-livvic text-xl font-medium">
                                    +880123456789
                                </p>
                                <p className="text-white font-livvic text-xl font-medium">
                                    +880987654321
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[7px]">
                            <p className="text-white font-centuryGothic text-sm">Email</p>
                            <p className="text-white font-livvic text-xl font-medium">
                                needhelp@company.com
                            </p>
                        </div>

                        <div className="flex flex-col gap-[7px]">
                            <p className="text-white font-centuryGothic text-sm">Address</p>
                            <p className="text-white font-livvic text-xl font-medium">
                                Road No. 8, Niketan, Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>
                </div>

                {/* الفورم */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-[30px] w-full max-w-[738px]"
                >
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="rounded-[10px] bg-[#263C28] text-white/80 font-inter text-base py-[25px] px-[22px] outline-none focus:ring-1 focus:ring-[#F7C35F]"
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="rounded-[10px] bg-[#263C28] text-white/80 font-inter text-base py-[25px] px-[22px] outline-none focus:ring-1 focus:ring-[#F7C35F]"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="rounded-[10px] bg-[#263C28] text-white/80 font-inter text-base py-[25px] px-[22px] outline-none focus:ring-1 focus:ring-[#F7C35F]"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows={5}
                        className="rounded-[10px] bg-[#263C28] text-white/80 font-inter text-base py-[25px] px-[22px] outline-none resize-none focus:ring-1 focus:ring-[#F7C35F]"
                    />
                    <button
                        type="submit"
                        className="self-start rounded-[20px] bg-[#F7C35F] text-[#1A1A1A] font-livvic text-[15px] font-medium py-[25px] px-[50px] hover:bg-[#f7cc35] transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}