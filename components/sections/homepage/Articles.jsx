import Article from "../../ui/Article";

export default function Articles() {
  const data = [
    {
      title: "We are TUM – the podcast of our university",
      description:
        'In our podcast series, we regularly talk to the people who make up our university: From top researchers, students and faculty to the "hidden champions" behind the scenes.',
      src: "/images/articles1.jpg",
      buttonText: "All Episodes",
      first: true,
    },
    {
        title: "Lifelong learning",
        description: 'We offer continuing education opportunities accompanying you over your whole career.',
        src: "/images/articles2.jpg",
        buttonText: "TUM Institute for LifeLong Learning",
        first: false
    },
    {
        title: "Stay connected",
        description: 'Benefit from our worldwide network, make contacts and stay connected with your Alma Mater!',
        src: "/images/articles3.jpg",
        buttonText: "Join the TUM Community",
        first: false
    },
    {
        title: "TUMint Relocation Service",
        description: 'All-inclusive onboarding package for international students assists with accommodation and much more.',
        src: "/images/articles4.jpg",
        buttonText: "See our services",
        first: false
    },
       {
        title: "Discover the TUMshop",
        description: 'Merchandising items, conference materials and other products in the corporate design can be found online and on site.',
        src: "/images/articles5.jpg",
        buttonText: "Shop online",
        first: false
    },
  ];
  return (
    <div className="mt-16">
      <div className="mx-auto px-6 max-w-main grid lg:grid-cols-3 lg:grid-rows-2 gap-y-10 gap-x-36">
        {data.map((el, index) => <Article key={index} {...el} />)}
      </div>
    </div>
  );
}
