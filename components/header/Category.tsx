import Image from "next/image";
import { User, Heart, ShoppingBag } from "lucide-react";

const Category = () => {
  return (
    <div className="flex items-center w-full h-[60px] bg-[#262626] px-[90px] text-white">
      {/* მთავარი კონტეინერი justify-between-ით აუცილებელია */}
      <div className="flex items-center justify-between w-full">
        {/* 1. მარცხენა სექცია (Categories, USD, English) */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Image src="/category.png" alt="cat" width={18} height={18} />
            <span className="font-medium text-sm">Categories</span>
          </div>
          <div className="flex gap-4 text-xs">
            <select className="bg-transparent outline-none cursor-pointer border-none">
              <option value="USD">USD</option>
            </select>
            <select className="bg-transparent outline-none cursor-pointer border-none">
              <option value="English">English</option>
            </select>
          </div>
        </div>

        {/* ვერტიკალური გამყოფი ხაზი */}
        <div className="h-8 w-px bg-gray-600"></div>

        {/* 2. შუა სექცია (ბანერი) - მოვაშორეთ flex-1 */}
        <div className="flex items-center gap-3">
          <Image
            src="/cosmetic.png"
            alt="promo"
            width={40}
            height={40}
            className="object-contain"
          />
          <div className="text-[10px]">
            <p className="font-bold">Weekly Men's Toiletries Coupons.</p>
            <p className="text-gray-400 mt-px">
              We extend exclusive discounts to our male clientele
            </p>
          </div>
        </div>

        {/* ვერტიკალური გამყოფი ხაზი */}
        <div className="h-8 w-px bg-gray-600"></div>

        {/* 3. მარჯვენა სექცია (Sign in, Favorites, Card) */}
        <div className="flex items-center mr-6 gap-6">
          <div className="flex items-center gap-2 cursor-pointer">
            <User size={18} />
            <span className="text-xs whitespace-nowrap">Sign in</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Heart size={18} />
            <span className="text-xs whitespace-nowrap">Favorites</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer relative">
            <ShoppingBag size={18} />
            <span className="text-xs whitespace-nowrap">Card</span>
            <span className="absolute -top-2 -right-3 bg-emerald-500 text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
