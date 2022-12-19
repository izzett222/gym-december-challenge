import Image from "next/image";
import Button from "../../ui/Button";
import downArrow from "/public/icons/downarrow.svg";
import rightArrow from "/public/icons/rightarrow.svg";
export default function Offers() {
  return (
    <div className="mt-12 px-6 max-w-main mx-auto">
      <div className="text-dark-blue">
        <div className="mb-12">
          <p className="font-bold">Customized navigation</p>
          <h2 className="font-bold text-2.5xl">
            Discover what TUM has to offer
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-10 gap-y-6 items-center">
        <div className="max-w-[93px] border border-[#cdd4db] h-fit hidden xl:block">
            <div className="bg-white px-2 pb-2 w-[230px] relative z-10">
              <p className="px-5 py-3">for:</p>
              <p className="px-5 py-3 bg-light-gray">Prospective Students</p>
              <p className="px-5 py-3">Founders</p>
              <p className="px-5 py-3">Employees</p>
              <div className="pt-2 border-t-[1px] border-light-gray-100 mt-5">
                <p className="px-5 py-3">Show all</p>
              </div>
            </div>
        </div>
          <div className="bg-yellow p-10 xl:py-[111px] xl:px-[129px] max-w-[40rem] flex-1 w-full">
            <div className="bg-white px-2 pb-2 xl:hidden">
              <p className="px-5 py-3">for:</p>
              <p className="px-5 py-3 bg-light-gray">Prospective Students</p>
              <p className="px-5 py-3">Founders</p>
              <p className="px-5 py-3">Employees</p>
              <div className="pt-2 border-t-[1px] border-light-gray-100 mt-5">
                <p className="px-5 py-3">Show all</p>
              </div>
            </div>
            <div className="bg-offer-bg bg-cover bg-no-repeat aspect-[269/140] xl:flex hidden">
                <div className="mt-[10%] bg-yellow w-[10%]"></div>
                <div className="bg-transparent w-[10%]"></div>
                <div className="mt-[10%] bg-yellow w-[10%]"></div>
                <div className="bg-transparent w-[10%]"></div>
                <div className="mb-[10%] bg-yellow w-[10%]"></div>
                <div className="bg-transparent w-[10%]"></div>
                <div className="mt-[10%] bg-yellow w-[10%]"></div>
                <div className="bg-transparent w-[10%]"></div>
                <div className="mt-[10%] bg-yellow w-[10%]"></div>
                <div></div>

            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-4.5xl">Prospective Students</h3>
            <p className="mt-6 mb-8">
              Learn to bring ideas to life, discover new possibilities, work in
              teams and build networks.
            </p>
            <Button secondary>Learn more</Button>
          </div>
        </div>
        <div className="flex flex-col">
            <div className="bg-[#e8ecef] px-5 border-b-primary border flex mt-12">
                <p className="text-base text-[#303030] opacity-80 py-5 font-semibold flex-1">Select degree program or enter keyword</p>
                <Image src={downArrow} alt="open" />
            </div>
            <div className="w-full flex justify-end mt-2 text-dark-blue-100">
                <p>degree program</p>
                <Image src={rightArrow} alt="open" />
            </div>
        </div>
      </div>
    </div>
  );
}
