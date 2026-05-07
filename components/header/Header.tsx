import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import SocialsLinks from "./SocialsLinks";
import Category from "./Category";
import MenuOptions from "./MenuOptions";

const Header = () => {
  return (
    <header className="w-full">
      {/* ზედა სექცია: ლოგო, ძებნა, ნავიგაცია და სოციალურები */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-7 gap-4">
        {/* მარცხენა მხარე: ლოგო და საძიებო ზოლი */}
        <div className="flex items-center gap-0.5 w-full md:w-auto md:ml-22.5">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="luminae"
              width={49}
              height={33}
              className="w-12.25 h-auto rotate-y-180"
            />
          </Link>
          <h1 className="font-bold text-3xl">Luminae</h1>
          <div className="ml-4 md:ml-[40.5px]">
            <Searchbar />
          </div>
        </div>

        {/* მარჯვენა მხარე: ლინკები და სოციალურები */}
        <div className="flex items-center gap-6">
          <Navbar />
          <SocialsLinks />
        </div>
      </div>

      {/* ქვედა სექცია: კატეგორიები (ყოველთვის ქვემოთ იქნება) */}
      <div className="w-full h-19.5 py-2">
        <Category />
      </div>

      <div className="flex items-center justify-center w-full h-13.25">
        <MenuOptions />
      </div>
    </header>
  );
};

export default Header;
