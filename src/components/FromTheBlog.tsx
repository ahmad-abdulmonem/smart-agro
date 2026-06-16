import Image from "next/image";

interface BlogPost {
    image: string;
    title: string;
    author: string;
    comments: number;
    date: string;
}

const posts: BlogPost[] = [
    {
        image: "/Image26.png",
        title: "Taking seamless key indicators offline to",
        author: "Kevin Martin",
        comments: 2,
        date: "3 Sep, 2023",
    },
    {
        image: "/Image26_1_.png",
        title: "Override the digital divide with additional",
        author: "Kevin Martin",
        comments: 5,
        date: "3 Sep, 2023",
    },
    {
        image: "/Image26_2_.png",
        title: "Agriculture Matters to the Future of next",
        author: "Kevin Martin",
        comments: 1,
        date: "3 Sep, 2023",
    },
];

function AuthorIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(3 13) scale(0.867 0.833)">
                <path
                    d="M13.8333 5.5V3.83333C13.8333 2.94928 13.4821 2.10143 12.857 1.47631C12.2319 0.85119 11.3841 0.5 10.5 0.5H3.83333C2.94928 0.5 2.10143 0.85119 1.47631 1.47631C0.851189 2.10143 0.5 2.94928 0.5 3.83333V5.5"
                    stroke="#F7C35F"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <g transform="translate(7 3) scale(0.875)">
                <path
                    d="M3.83333 7.16667C5.67428 7.16667 7.16667 5.67428 7.16667 3.83333C7.16667 1.99238 5.67428 0.5 3.83333 0.5C1.99238 0.5 0.5 1.99238 0.5 3.83333C0.5 5.67428 1.99238 7.16667 3.83333 7.16667Z"
                    stroke="#F7C35F"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}

function CommentIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.5 9.58336C17.5029 10.6832 17.2459 11.7683 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6078C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6696 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7683 3.33047 10.6832 3.33333 9.58336C3.33384 8.26815 3.70051 6.97907 4.39227 5.86048C5.08402 4.7419 6.07355 3.838 7.25 3.25002C8.23176 2.75413 9.31678 2.49716 10.4167 2.50002H10.8333C12.5703 2.59585 14.2109 3.32899 15.441 4.55907C16.671 5.78915 17.4042 7.42973 17.5 9.16669V9.58336Z"
                stroke="#F7C35F"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function FromTheBlog() {
    return (
        <section className="relative bg-[#263C28] overflow-hidden">
            {/* النمط الزخرفي */}
            <div className="absolute top-0 left-0 w-full h-[573px]">
                <Image src="/Style.png" alt="" fill className="object-cover opacity-40" />
            </div>

            <div className="relative z-10 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-[100px] lg:pb-[100px] px-6 sm:px-10 lg:px-[12.5%]">
                {/* العنوان */}
                <div className="flex flex-col items-center gap-4 sm:gap-5 text-center">
                    <p className="text-white font-centuryGothic text-lg sm:text-xl">FROM THE BLOG</p>
                    <h2 className="text-white font-livvic text-3xl sm:text-4xl lg:text-[50px] font-bold">
                        News &amp; Articles
                    </h2>
                </div>

                {/* المقالات */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-12 sm:mt-16 lg:mt-[103px]">
                    {posts.map((post, index) => (
                        <article
                            key={index}
                            className="relative rounded-[10px] overflow-hidden bg-[#2D442F]"
                        >
                            {/* الصورة + شارة التاريخ */}
                            <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[364px]">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                                <span className="absolute bottom-0 right-0 bg-[#F7C35F] text-[#1A1A1A] font-livvic text-[15px] font-medium px-5 py-[7px] rounded-[10px]">
                                    {post.date}
                                </span>
                            </div>

                            {/* المحتوى */}
                            <div className="p-5">
                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                                    <div className="flex items-center gap-[7px]">
                                        <AuthorIcon />
                                        <span className="text-white font-centuryGothic text-sm">
                                            by {post.author}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-[7px]">
                                        <CommentIcon />
                                        <span className="text-white font-centuryGothic text-sm">
                                            {post.comments} Comments
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-white font-livvic text-lg sm:text-xl lg:text-2xl font-bold leading-snug mt-4 sm:mt-6">
                                    {post.title}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}