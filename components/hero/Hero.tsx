import { ShoppingBag } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full flex flex-row items-center justify-start overflow-hidden">
      {/* მარცხენა მხარე - გამოიყენე კვადრატული ფრჩხილები ზომებისთვის */}
      <div className="relative h-[460px] flex-[547]">
        <Image
          src="/left.png"
          alt="leftImg"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* მარჯვენა მხარე */}
      <div className="relative h-[460px] flex-[893] overflow-hidden">
        {/* სურათი - დავუმატოთ filter brightness, რომ Overlay-ს გარეშეც გამუქდეს */}
        <Image
          src="/sky.png"
          alt="sky"
          fill
          className="object-cover brightness-[0.8] saturate-[1.2]"
        />

        {/* Overlay - ნაცვლად შავისა, გამოვიყენოთ მუქი ლურჯი გრადიენტი */}
        <div className="absolute inset-0 bg-linear-to-r from-[#001529]/40 to-[#001529]/20 z-10"></div>

        {/* კონტენტი - z-20 აუცილებელია */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
          <h2 className="text-[42px] font-bold uppercase tracking-tight mb-8">
            Kimonos, Caftans & Pareos
          </h2>

          <p className="text-[20px] font-medium mb-10">
            Poolside glam included From $4.99
          </p>

          <button className="w-60.75 h-14 bg-blue-600 hover:bg-blue-800 transition-colors text-white flex items-center justify-center gap-3 rounded-sm font-bold text-sm uppercase">
            <ShoppingBag size={20} />
            <span>SHOP NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
