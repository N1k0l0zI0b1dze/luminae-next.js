import Link from "next/link";
import ProductCards from "./ProductCards";

const Sales = () => {
  return (
    <div className="flex flex-col items-center w-full h-112 bg-red-500 mt-21 px-22.5">
      <div className="flex items-center justify-between w-full h-5 bg-white">
        <p className="text-2xl font-medium">Flash Sales</p>
        <Link
          href="#"
          className="flex items-center gap-1 text-sm font-medium hover:text-amber-600"
        >
          View all <span>&gt;</span>
        </Link>
      </div>

      <div className="flex flex-row w-full h-95 bg-white mt-17">
        <ProductCards />
      </div>
    </div>
  );
};

export default Sales;
