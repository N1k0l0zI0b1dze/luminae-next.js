import Image from "next/image";
import Link from "next/link";

const Offers = () => {
  return (
    <div className="flex flex-row items-center w-full h-98.25 mt-17 px-22.5">
      <div className="flex flex-row justify-between w-full h-full">
        {/* right */}
        <div className="flex flex-row items-center w-157.5 h-full bg-black">
          <div className="flex flex-col items-center w-77.5 h-full px-5 bg-[rgb(191,46,59)]">
            <div className="flex flex-col justify-between items-center w-67.5 h-45 mt-17">
              <p className="text-4xl font-extrabold text-white">
                Never-Ending Summer
              </p>
              <p className="text-[28px] font-normal text-white">
                Throwback Shirts & all-day dressed
              </p>
            </div>

            <div className="flex items-center w-67.5 h-9 mt-7.75">
              <Link
                href={`#`}
                className="text-[20px] text-white font-normal hover:text-amber-600 underline"
              >
                Exlopre all category
              </Link>
            </div>
          </div>

          <div className="relative w-full h-full">
            <Image
              src="/red-dress.png"
              alt="red-dress"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* left */}
        <div className="flex flex-row items-center w-157.5 h-full bg-black">
          <div className="flex flex-col items-center w-77.5 h-full px-5 bg-[rgba(29,81,89,1)]">
            <div className="flex flex-col justify-between items-center w-67.5 h-45 mt-17">
              <p className="text-4xl font-extrabold text-white">
                The most famous sport brands
              </p>
              <p className="text-[28px] font-normal text-white">
                Get in gym essentials
              </p>
            </div>

            <div className="flex items-center w-67.5 h-9 mt-7.75">
              <Link
                href={`#`}
                className="text-[20px] text-white font-normal hover:text-amber-600 underline"
              >
                Exlopre all category
              </Link>
            </div>
          </div>

          <div className="relative w-full h-full">
            <Image
              src="/green-pants.png"
              alt="red-dress"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
