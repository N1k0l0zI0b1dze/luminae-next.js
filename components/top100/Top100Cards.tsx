import { Heart } from "lucide-react";
import Image from "next/image";

const topCards = [
  {
    id: 1,
    image: "/mango.png",
    title: "Mango",
    description: "Kimono & Cotton - Black - Regular fit",
    rates: 289,
    price: 228,
    oldPrice: 290,
    discount: "-10%",
  },
  {
    id: 2,
    image: "/zara.png",
    title: "Zara",
    description: "Midi top - Daily fit",
    rates: 523,
    price: 95,
    oldPrice: 145,
    discount: "-7%",
  },
  {
    id: 3,
    image: "/uniqlo.png",
    title: "Uniqlo",
    description: "Midi alfa Slim fit - bohemian",
    rates: 86,
    price: 125,
    oldPrice: 156,
    discount: "-8%",
  },
  {
    id: 4,
    image: "/mango-dress.png",
    title: "Mango Dress",
    description: "Kimono & Cotton - Colorful - Night club fit",
    rates: 121,
    price: 365,
    oldPrice: 487,
    discount: "-15%",
  },
];

const Top100Cards = () => {
  return (
    <div className="grid grid-cols-4 gap-6 w-full">
      {topCards.map((item) => (
        <div
          key={item.id}
          className="flex flex-col rounded-xl overflow-hidden  bg-white shadow-[0_0_12px_rgba(0,0,0,0.08)]  cursor-pointer"
        >
          {/* IMAGE */}
          <div className="w-full h-95 relative">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col items-center w-full h-38.25 px-5 py-5">
            <div className="flex flex-row justify-between w-full h-11">
              <div className="flex flex-col justify-between">
                <p className="font-bold size-3 whitespace-nowrap">
                  {item.title}
                </p>
                <p className="font-normal text-xs text-gray-600">
                  {item.description}
                </p>
              </div>

              <div className="self-center">
                <Heart
                  size={30}
                  strokeWidth={1.3}
                  className="text-black hover:text-red-500 transition-colors"
                />
              </div>
            </div>
            {/* rates */}
            <div className="flex items-center w-full h-6.25 mt-3">
              <Image src="/star.png" alt="stars" width={120} height={24} />
              <p className="text-sm text-gray-400 ml-1">{`(${item.rates})`}</p>
            </div>

            {/* price */}
            <div className="flex items-center w-full h-5 mt-3">
              <p className="text-[20px] text-red-500 font-extrabold">
                ${item.price}
              </p>

              <p className="text-[14px] text-gray-400 ml-2 font-normal">
                ${item.oldPrice}
              </p>

              <p className="text-[12px] text-red-500 ml-2">{item.discount}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Top100Cards;
