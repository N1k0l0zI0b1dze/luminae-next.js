"use client";

import Image from "next/image";
import CountDown from "./CountDown";

const deals = [
  {
    id: 1,
    title: "Deal of the Day",
    timer: { hour: 12, min: 43, sec: 12 },
    image: "/bag.png",
    brand: "Tonny Black",
    description: "Shoulder bag-White-Plain",
    currentPrice: 69.99,
    oldPrice: 129.99,
    discount: 40,
  },
  {
    id: 2,
    title: "Deal of the Day",
    timer: { hour: 2, min: 5, sec: 32 },
    image: "/shoe.png",
    brand: "Reebok",
    description: "Women's Powder sneakers",
    currentPrice: 112.02,
    oldPrice: 129.99,
    discount: 40,
  },
  {
    id: 3,
    title: "Deal of the Day",
    timer: { hour: 2, min: 14, sec: 21 },
    image: "/pink-bag.png",
    brand: "Patso",
    description: "Shoulder bag-Pink-Plain",
    currentPrice: 69.99,
    oldPrice: 129.99,
    discount: 40,
  },
  {
    id: 4,
    title: "Deal of the Day",
    timer: { hour: 25, min: 11, sec: 2 },
    image: "/shoe-black.png",
    brand: "Sketchers",
    description: "Sport-shoe 2102",
    currentPrice: 80.0,
    oldPrice: 129.99,
    discount: 40,
  },
];

const ProductCards = () => {
  return (
    <div className="grid grid-cols-4 gap-6 w-full">
      {deals.map((deal) => {
        const targetTime =
          Date.now() +
          deal.timer.hour * 60 * 60 * 1000 +
          deal.timer.min * 60 * 1000 +
          deal.timer.sec * 1000;

        return (
          <div
            key={deal.id}
            className="flex flex-col w-full rounded-xl bg-white shadow-[0_0_12px_rgba(0,0,0,0.08)] overflow-hidden"
          >
            {/* TOP */}
            <div className="flex flex-col items-center pt-5">
              <p className="text-base font-medium text-gray-500">
                {deal.title}
              </p>

              <div className="mt-2">
                <CountDown targetTime={targetTime} />
              </div>

              <div className="flex text-xs text-gray-400 mt-1">
                <p className="w-10 text-center">hour</p>
                <p className="w-10 text-center">min</p>
                <p className="w-10 text-center">sec</p>
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex items-center justify-center w-full h-52 px-4 mt-4">
              <Image
                src={deal.image}
                alt={deal.brand}
                width={220}
                height={160}
                className=""
              />
            </div>

            {/* INFO */}
            <div className="flex flex-col w-full px-6 pb-5 mt-4">
              {/* BRAND */}
              <p className="text-[22px] leading-none font-extrabold text-black">
                {deal.brand}
              </p>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-500 mt-2 leading-5">
                {deal.description}
              </p>

              {/* RATING */}
              <div className="flex items-center mt-3">
                <div className="flex text-yellow-400 text-sm">★★★★★</div>

                <span className="text-sm text-gray-400 ml-1">(54)</span>
              </div>

              {/* PRICE */}
              <div className="flex items-center gap-2 mt-3">
                <span className="text-lg font-bold text-red-500">
                  ${deal.currentPrice}
                </span>

                <span className="text-sm text-gray-400 line-through">
                  ${deal.oldPrice}
                </span>

                <span className="bg-red-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                  -{deal.discount}%
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCards;
