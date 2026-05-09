import Hero from "@/components/hero/Hero";
import Offers from "@/components/offers/Offers";
import Sales from "@/components/sales/Sales";
import Top100 from "@/components/top100/Top100";
import Trending from "@/components/trending/Trending";

const Home = () => {
  return (
    <div>
      <Hero />
      <Sales />
      <Trending />
      <Top100 />
      <Offers />
    </div>
  );
};

export default Home;
