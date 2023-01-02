import Button from "./Button";
import Image from "next/image";

export default function Article({ src, title, description, buttonText, first }) {
  return (
    <div className={`${first ? "lg:col-span-2": "col-span-1"} flex flex-col group`}>
      <div className="relative h-[256px]">
        <Image src={src} alt="" fill className="object-cover" />
      </div>
      <div>
        <h3 className="font-bold text-[24px] leading-[30px] group-hover:text-dark-blue-100 my-4">{title}</h3>
        <p className="font-mediym text-[16px] leading-[26px] group-hover:text-dark-blue-100 mb-4">{description}</p>
        <Button secondary>{buttonText}</Button>
      </div>
    </div>
  );
}
