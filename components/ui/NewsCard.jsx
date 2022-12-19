import Image from "next/image";

export default function NewsCard({
  src,
  tag,
  header,
  subheader,
  description,
  date,
  readingTime,
}) {
  return (
    <div className="w-full md:w-1/2 lg:w-full">
      <div className="relative z-0">
        <Image src={src} style={{height: "auto"}} alt="" />
        <span className="absolute bottom-0 left-0 inline-block bg-light-gray py-0.5 px-2 text-sm z-10">{tag}</span>
      </div>
      <div className="mt-3">
        <p className="font-bold">{subheader}</p>
        <h3 className="font-bold text-xl">{header}</h3>
        <p className="mt-3 text-sm leading-[1.5]">{description}</p>
      </div>
      <div className="mt-4 flex justify-between font-medium text-xs">
        <span>{date}</span>
        <span>{readingTime}</span>
      </div>
    </div>
  );
}
