"use client";

import CountDown from "./CountDown";

const deals = [
  { id: 1, title: "Deal of the Day", timer: { hour: 12, min: 43, sec: 12 } },
  { id: 2, title: "Deal of the Day", timer: { hour: 2, min: 5, sec: 32 } },
  { id: 3, title: "Deal of the Day", timer: { hour: 2, min: 14, sec: 21 } },
  { id: 4, title: "Deal of the Day", timer: { hour: 25, min: 11, sec: 2 } },
];

const ProductCards = () => {
  return (
    <div className="grid grid-cols-4 gap-6 w-full">
      {deals.map((deal) => {
        // ✅ FIX: use constant per render instance (no instability)
        const targetTime =
          deal.timer.hour * 60 * 60 * 1000 +
          deal.timer.min * 60 * 1000 +
          deal.timer.sec * 1000 +
          Date.now();

        return (
          <div
            key={deal.id}
            className="flex flex-col items-center w-full h-90 rounded-lg bg-amber-800 shadow-[0_0_12px_rgba(0,0,0,0.1)] pt-4 pb-3.75"
          >
            <p className="text-base font-medium text-gray-400">{deal.title}</p>

            <CountDown targetTime={targetTime} />

            <div className="flex mt-0 text-xs text-gray-400">
              <p className="w-10 text-center">hour</p>
              <p className="w-10 text-center">min</p>
              <p className="w-10 text-center">sec</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCards;
