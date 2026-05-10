import Hero from "@/components/hero/Hero";
import Offers from "@/components/offers/Offers";
import Offers2 from "@/components/Offers2.tsx/Offers2";
import Sales from "@/components/sales/Sales";
import Swiper from "@/components/swiper/Swiper";
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
      <Swiper />
      <Offers2 />
    </div>
  );
};

export default Home;
