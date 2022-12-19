import Image from "next/image";

export default function ResearchCard({src, title, description, bg, buttonbg, buttonText, buttonTextColor}) {
    return (
        <div className="text-white lg:flex lg:flex-row">
            <div className="lg:flex-1">
                <Image src={src} alt="" className="object-cover w-full h-full" />
            </div>
            <div className={`${bg} p-6 md:mx-[72px] lg:mx-0 lg:max-w-[435px] lg:my-[72px] lg:self-center relative -top-16 lg:top-0 lg:-left-16 lg:flex-1`}>
                <h3 className="text-3xl font-bold">{title}</h3>
                <p className="leading-[1.625] mt-5">{description}</p>
                <button className={`${buttonbg} ${buttonTextColor} py-4 px-5 font-bold`}>{buttonText}</button>
            </div>
        </div>
    )
}