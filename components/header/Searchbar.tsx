import { Search } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="flex flex-row items-center border border-gray-300 rounded-md w-[450px] h-11 px-3 py-1 bg-white">
      <input
        type="text"
        placeholder="Search Products"
        className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
      />

      <select
        name="categories"
        id="categories"
        className="bg-transparent outline-none text-sm text-gray-600 cursor-pointer pr-2"
      >
        <option value="all">All categories</option>
        <option value="women">Women</option>
        <option value="men">Men</option>
      </select>

      <div className="h-6 w-px bg-gray-200 mx-2"></div>

      <button className="flex items-center justify-center pl-1">
        <Search size={18} className="text-gray-800" />
      </button>
    </div>
  );
};

export default Searchbar;
