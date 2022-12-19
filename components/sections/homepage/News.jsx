import Button from "../../ui/Button";
import NewsCard from "../../ui/NewsCard";
import news1 from "/public/images/news1.jpeg";
import news2 from "/public/images/news1.jpeg";
import news3 from "/public/images/news1.jpeg";
import news4 from "/public/images/news1.jpeg";

export default function News() {
  return (
    <section className="bg-white text-dark-blue">
      <div className="max-w-main mx-auto px-6">
        <div className=" flex flex-col gap-y-6 lg:flex-row mt-12 gap-2">
          <div className="flex-1 px-3">
            <h2 className="text-2.5xl font-bold">News from TUM</h2>
            <p className="text-xl mt-6">
              News, research results and events: everything that enthuses people
              at our university.
            </p>
            <div className="mt-6">
              <Button>see all</Button>
            </div>
          </div>
          <div className="flex-1 gap-6 flex flex-col md:flex-row lg:flex-col xl:flex-row px-3">
            <NewsCard
              src={news1}
              date={"12/06/2022"}
              readingTime={"reading time 2 min"}
              tag="TUM in rankings"
              header="Germany's strongest university in business sciences"
              subheader="WirtschaftsWoche rankings"
              description="TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
            />
            <NewsCard
              src={news2}
              tag="Research"
              date={"12/06/2022"}
              readingTime={"reading time 2 min"}
              header="Antihelium nuclei as messengers from the depths of the galaxy"
              subheader="Search for dark matter"
              description="How are galaxies born, and what holds them together? Astronomers assume that dark matter plays an essential role. However,"
            />
          </div>
        </div>
        <div className="flex-1 gap-6 flex flex-col md:flex-row lg:flex-col xl:flex-row lg:ml-[50%] px-3 xl:ml-[34%] mt-6 xl:w-1/2">
            <NewsCard
              src={news1}
              date={"12/06/2022"}
              readingTime={"reading time 2 min"}
              tag="TUM in rankings"
              header="Germany's strongest university in business sciences"
              subheader="WirtschaftsWoche rankings"
              description="TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
            />
            <NewsCard
              src={news1}
              tag="News"
              date={"12/06/2022"}
              readingTime={"reading time 2 min"}
              header="Germany's strongest university in business sciences"
              subheader="WirtschaftsWoche rankings"
              description="TUM has retained its ranking as Germany’s strongest research university in business sciences. The latest issue of the..."
            />
          </div>
      </div>
    </section>
  );
}
