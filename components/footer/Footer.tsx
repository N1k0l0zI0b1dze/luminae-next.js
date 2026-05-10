import { Send } from "lucide-react";
import Image from "next/image";

const footerMenu = [
  {
    title: "Company",
    items: ["About Us", "Our Store", "Contact us"],
  },
  {
    title: "Career Opportunities",
    items: ["Selling Programs", "Advertise", "Cooperation"],
  },
  {
    title: "How to Buy",
    items: [
      "Making Payments",
      "Delivery Options",
      "Buyer Protection",
      "New User Guide",
    ],
  },
  {
    title: "Help",
    items: ["Contacts Us", "FAQ", "Privacy Policy"],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col w-full relative h-155.5 mt-17">
      <div className="absolute flex flex-col items-center left-1/2 -translate-x-1/2 w-142.75 h-46.75 rounded-lg bg-[rgba(114,150,171,1)]">
        <div className="flex flex-col items-center w-114.75 h-15.75 mt-8">
          <p className="text-[24px] font-bold text-white">Luminae Store</p>
          <p className="flex mt-4 self text-[10px] text-white">
            Register your email not to miss the last minutes off+ Free delivery
          </p>
        </div>
        <div className="w-67 h-9 mt-6 bg-white rounded-sm flex items-center px-4 shadow-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 outline-none text-gray-600 placeholder-gray-400"
          />

          <Send
            height={16}
            width={16}
            className="text-[rgba(67,67,67,1)] cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-center mt-33 w-full h-90.5 bg-[rgba(209,226,235,1)]">
        <div className="flex flex-row gap-31.5 w-222.25 h-42.5 mt-25">
          {footerMenu.map((menu) => (
            <div
              key={menu.title}
              className="flex flex-col w-40 h-full whitespace-nowrap"
            >
              <p className="text-[14px] font-bold text-[rgba(38,38,38,1)]">
                {menu.title}
              </p>
              <div className="mt-4 space-y-4">
                {menu.items.map((item) => (
                  <p
                    key={item}
                    className="text-[12px] text-[rgba(85,85,85,1)] mt-2 cursor-pointer hover:text-amber-600"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center w-full h-43.25 px-25">
        <div className="flex flex-row justify-between items-center w-full h-7.5 mt-6 bg-white">
          <div className="flex flex-row w-55.25 h-full gap-5">
            <Image
              src="/visa.png"
              alt="visa"
              width={62}
              height={19}
              className="grayscale opacity-50"
            />
            <Image
              src="/mastercard.png"
              alt="mastercard"
              width={38}
              height={30}
              className="grayscale opacity-50"
            />
            <Image
              src="/paypal.png"
              alt="paypal"
              width={50}
              height={15}
              className="grayscale opacity-50"
            />
          </div>
          <select className="bg-transparent outline-none cursor-pointer border-none">
            <option
              value="English"
              className="text-[14px] text-[rgba(38,38,38,1)]"
            >
              English
            </option>
          </select>
        </div>

        <div className="w-full h-0.5 mt-3 bg-[rgba(217,217,217,1)]"></div>

        <div className="flex flex-row items-center justify-between w-full h-17.25 mt-3">
          <div className="w-140 h-5">
            <p className="text-[14px]">
              165-179 Forster Road City of Monash, Melbourne, Australia
            </p>
          </div>
          <div className="w-140 h-5">
            <p className="text-[14px]">
              ©2023 Copyright in reserved for lumine shop
            </p>
          </div>

          <div className="flex gap-4">
            <Image src="/instagram2.png" alt="insta" width={24} height={24} />
            <Image src="/facebook2.png" alt="facebook" width={24} height={24} />
            <Image src="/telegram2.png" alt="telegram" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
