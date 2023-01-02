import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="px-6 bg-[#0A2D57] pt-14">
        <div className="mx-auto max-w-main text-white">
          <div className="flex justify-between gap-5 flex-col md:flex-row border-b border-b-[#3a577a73] pb-20">
            <div className="flex items-start gap-4">
              <Image
                className="pt-1"
                src="/icons/footerlogo.svg"
                alt=""
                width={48}
                height={27}
              />
              <div>
                <p className="leading-[1.7]">
                  Technical University of Munich <br />
                  Arcisstraße 21 <br />
                  80333 München <br />
                </p>
                <p className="mt-5">
                  Phone: +49 (0)89-289-01 <br />
                  Fax: +49 (0)89-289-22000 <br />
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold">
                Let&apos;s shape the future together.
              </h3>
              <Link href={"/"} className="flex mt-4 gap-2">
                Support us{" "}
                <Image src={"/icons/link.svg"} alt="" width={24} height={24} />
              </Link>
            </div>
            <div>
              <h3 className="font-bold">Latest news</h3>
              <div className="flex flex-col gap-3 mt-2">
                {[
                  "Happy Holidays and a Happy New Year",
                  "Preparing for a digitalized working world",
                  "Understanding the potentials of quantum technologies for industry",
                ].map((el, i) => (
                  <div className="flex gap-2 max-w-[423px]" key={i}>
                    <Image
                      src={"/icons/whitearrow.svg"}
                      alt=""
                      width={20}
                      height={20}
                    />
                    {el}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-5">
            <div className="flex flex-col md:flex-row mb-5 gap-8">
              <h3 className="font-bold max-w-[80px]">
                Schools and Departments:{" "}
              </h3>
              <div className="flex flex-wrap">
                {[
                  "Computation, Information and Technology",
                  "Engineering and Design",
                  "Natural Sciences",
                  "Life Sciences",
                  "Management",
                  "Social Sciences and Technology",
                  "Medicine",
                  "Sport and Health Sciences",
                ].map((el, i) => (
                  <Link
                    href={"/"}
                    key={i}
                    className="inline-flex gap-2 mr-4 mb-3 text-sm"
                  >
                    <span className="hover:underline">{el}</span>{" "}
                    <Image
                      src={"/icons/link.svg"}
                      alt=""
                      width={18}
                      height={18}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex gap-8 flex-col md:flex-row">
              <h3 className="font-bold">Quicklinks:</h3>
              <div className="flex flex-wrap">
                {[
                  "Persons (TUMonline)",
                  "IT Services",
                  "Calendar",
                  "MyTUM",
                  "Rooms (TUMonline)",
                  "University Library",
                  "TUMshop",
                ].map((el, i) => (
                  <Link
                    href={"/"}
                    key={i}
                    className="inline-flex gap-2 mr-4 mb-3 text-sm"
                  >
                    <span className="hover:underline">{el}</span>{" "}
                    <Image
                      src={"/icons/link.svg"}
                      alt=""
                      width={18}
                      height={18}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 bg-[#072140] py-5">
        <div className="mx-auto max-w-main text-white">
          <div className="flex justify-between  flex-col-reverse md:flex-row gap-5 md:gap-8">
            <ul className="flex gap-5 text-sm flex-wrap">
              <li className="hover:underline">Jobs</li>
              <li className="hover:underline">Feedback</li>
              <li className="hover:underline">Press and Media</li>
              <li className="hover:underline">Accessibility</li>
              <li className="hover:underline">Privacy Policy</li>
              <li className="hover:underline">Legal Notice</li>
            </ul>
            <div className="flex gap-5 flex-wrap">
              <Image
                src={"/icons/facebook.svg"}
                alt=""
                width={24}
                height={24}
              />
              <Image src={"/icons/youtube.svg"} alt="" width={24} height={24} />
              <Image src={"/icons/twitter.svg"} alt="" width={24} height={24} />
              <Image
                src={"/icons/instagram.svg"}
                alt=""
                width={24}
                height={24}
              />
              <Image
                src={"/icons/linkedin.svg"}
                alt=""
                width={24}
                height={24}
              />
              <Image src={"/icons/rss.svg"} alt="" width={24} height={24} />
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <Image src={"/icons/footer1.svg"} alt="" width={32} height={60} className="object-cover" />
            <div className="flex flex-col gap-5 text-sm leading-[18px]">
              <h3 className="font-bold">TUM Partners of Excellence</h3>
              <p>
                Airbus · Altana · Audi · Bayerischer Bauindustrieverband · BMW ·
                Bosch · Busch Vacuum · Clariant · Dräxlmaier · Evonik Industries
                · Google · Herrenknecht · HUAWEI · Infineon · Linde · MAN ·
                Nestlé · Rohde & Schwarz · RWE · SAP · SGL Carbon · Siemens ·
                TRUMPF · TÜV-Süd · Vereinigung der Bayerischen Wirtschaft ·
                Volkswagen · Wacker Chemie
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
