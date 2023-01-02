import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Articles from "../components/sections/homepage/Articles";
import Hero from "../components/sections/homepage/Hero";
import News from "../components/sections/homepage/News";
import Offers from "../components/sections/homepage/Offers";
import Research from "../components/sections/homepage/Research";
import Support from "../components/sections/homepage/Support";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <News />
      <Offers />
      <Research />
      <Articles />
      <Support />
      <Footer />
    </>
    
  )
}
