import Image from "next/image";
import Link from "next/link";

const Offers2 = () => {
  return (
    <div className="w-full h-98.25 mt-17 px-22.5">
      <div className="flex flex-row items-center justify-between w-full h-full">
        {/* left */}
        <div className="flex flex-row w-155 h-full bg-purple-500">
          <div className="px-5 bg-[rgba(209,31,181,1)]">
            <div className="flex flex-col justify-between w-67.5 h-36 mt-17">
              <p className="font-bold text-4xl text-[rgba(242,243,240,1)]">
                The Pinky Barbie Edition
              </p>

              <p className="font-normal text-[28px] text-[rgba(242,243,240,1)]">
                Lets play dress up
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
              src="/pinky-dress.png"
              alt="pinky-dress"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* right */}
        <div className="flex flex-row w-155 h-full bg-purple-500">
          <div className="px-5 bg-[rgba(1,134,196,1)]">
            <div className="flex flex-col justify-between w-67.5 h-36 mt-17">
              <p className="font-bold text-4xl text-[rgba(242,243,240,1)]">
                Best Sellers Everyone Love
              </p>

              <p className="font-normal text-[28px] text-[rgba(242,243,240,1)]">
                poolside glam include
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
              src="/StrawHat.png"
              alt="straw-hat-girl"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers2;
