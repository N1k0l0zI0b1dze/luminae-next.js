import Link from "next/link";
import TrendingCards from "./TrendingCards";

const Trending = () => {
  return (
    <div className="flex flex-col items-center w-full h-126.75 mt-21 px-22.5">
      <div className="flex items-center justify-between w-full h-5 bg-white">
        <p className="text-2xl font-medium">Trending must-haves</p>
        <Link
          href="#"
          className="flex items-center gap-1 text-sm font-medium hover:text-amber-600"
        >
          View all <span>&gt;</span>
        </Link>
      </div>
      <div className="flex flex-row w-full h-109.25 mt-17">
        <TrendingCards />
      </div>
    </div>
  );
};

export default Trending;
