import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-hero-min z-0">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-hero-bg z-10"></div>
      <video
        className="h-full w-full block"
        src={"/videos/hero.mp4"}
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        playsinline="playsinline"
      ></video>
      <div className="px-6 absolute max-w-main top-0 bottom-0 left-0 right-0 mx-auto z-20">
        <div className="py-16">
          <h1 class="text-4xl lg:text-5xl text-white font-bold leading-[1.1]">
            TUM. The Entrepreneurial
            <br />
            University
          </h1>
          <p className="text-white mt-6">
            Innovation through talent, excellence and responsibility
          </p>
        </div>
        <button className="bg-dark-blue-100 absolute bottom-6 right-6 p-2.5">
            <div>
                <Image src="/icons/play.svg" width={40} height={40} alt="play" />
            </div>
        </button>
      </div>
    </div>
  );
}
