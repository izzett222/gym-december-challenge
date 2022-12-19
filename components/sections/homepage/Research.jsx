import ResearchCard from "../../ui/ResearchCard";
import research1 from "/public/images/research1.webp";
import research2 from "/public/images/research2.webp";

export default function Research() {
  return (
    <div className="mx-auto px-6 max-w-main">
      <ResearchCard
        src={research1}
        title="What drives us: President Thomas F. Hofmann about TUM"
        description="Research and innovations for society, innovative teaching and continuing education: This is how we shape a sustainable future, relying on the intelligence of the entire university and working closely with global partners to do so."
        bg={"bg-dark-blue-100"}
        buttonTextColor={"text-dark-blue-100"}
        buttonbg={"bg-white"}
        buttonText={"Read more"}
      />
      <div className="mt-24">
        <h2 className="mb-12 text-[#072140] text-[32px] font-bold">
          TUM in numbers
        </h2>
        <div className="grid text-[#072140] gap-y-6 md:grid-cols-3 gap-x-6 lg:grid-cols-2">
          <div className="bg-[#3070b3] p-5 flex flex-col items-center">
            <p className="font-bold text-white text-[4.25rem] lg:text-[130px]">
              50,000
            </p>
            <span className="text-xl text-white ">Students</span>
          </div>
          <div className="bg-[#f7b11e] p-5 flex-col items-center flex lg:hidden">
            <p className="text-[80px] ] font-bold">176</p>
            <span className="text-xl">
              ERC Grants for cutting-edge research
            </span>
          </div>
          <div className="bg-[#b55ca5] p-5 flex-col items-center flex lg:hidden">
            <p className="text-[80px] font-bold">18</p>
            <span className="text-xl">Nobel laureates</span>
          </div>
          <div className="hidden lg:flex flex-col gap-y-6">
            <div className="bg-[#f7b11e] p-5 flex-col lg:flex-row items-center flex lg:gap-x-5">
              <p className="text-[80px] ] font-bold">176</p>
              <span className="text-xl">
                ERC Grants for cutting-edge research
              </span>
            </div>
            <div className="bg-[#b55ca5] p-5 flex-col lg:flex-row items-center flex lg:gap-x-5">
              <p className="text-[80px] font-bold">18</p>
              <span className="text-xl">Nobel laureates</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <ResearchCard
          src={research2}
          title="Schools and Research Centers"
          description="They form the academic foundation of TUM: Our schools and departments, connected at disciplinary interfaces by integrative research institutes to create an organization that drives innovation. "
          bg={"bg-[#8f81ea]"}
          buttonTextColor={"text-white"}
          buttonbg={"bg-[#3070b3]"}
          buttonText={"Organization"}
          textColor={"text-[#072140]"}
        />
      </div>
      <div className="mt-24">
        <ResearchCard
          src={research2}
          title="Schools and Research Centers"
          description="They form the academic foundation of TUM: Our schools and departments, connected at disciplinary interfaces by integrative research institutes to create an organization that drives innovation. "
          bg={"bg-[#8f81ea]"}
          buttonTextColor={"text-white"}
          buttonbg={"bg-[#3070b3]"}
          buttonText={"Organization"}
          textColor={"text-[#072140]"}
          reverse
        />
      </div>
    </div>
  );
}
