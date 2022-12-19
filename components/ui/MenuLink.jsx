import Link from "next/link";

export default function MenuLink({children, href}) {
    return (
        <Link href={href} className="text-sm font-bold uppercase text-white leading-[1.14] pt-8 pb-6 mb-0.5 inline-block border-b-4 border-transparent hover:border-b-white transition-colors duration-300">{children}</Link>
    )
}