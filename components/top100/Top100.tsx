import Link from "next/link";
import Top100Cards from "./Top100Cards";

const Top100 = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto mt-21 px-22.5">
      <div className="flex items-center justify-between w-full h-5 bg-white">
        <p className="text-2xl font-medium">Top100</p>
        <Link
          href="#"
          className="flex items-center gap-1 text-sm font-medium hover:text-amber-600"
        >
          View all <span>&gt;</span>
        </Link>
      </div>
      <div className="flex flex-row w-full h-auto mt-17">
        <Top100Cards />
      </div>
    </div>
  );
};

export default Top100;
