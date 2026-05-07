import Link from "next/link";

const categories = [
  { id: 1, slug: "woman", name: "Woman" },
  { id: 2, slug: "male", name: "Male" },
  { id: 3, slug: "motherChild", name: "Mother-Child" },
  { id: 4, slug: "homeFurniture", name: "Home & Furniture" },
  { id: 5, slug: "superMarket", name: "Super market" },
  { id: 6, slug: "cosmetics", name: "Cosmetics" },
  { id: 7, slug: "shoeBag", name: "Shoe & Bag" },
  { id: 8, slug: "electronic", name: "Electronic" },
  { id: 9, slug: "sportOutdoor", name: "Sport & Outdoor" },
  { id: 10, slug: "bestSeller", name: "Best seller" },
];

const MenuOptions = () => {
  return (
    <div className="flex flex-wrap items-center gap-[59.49px]">
      {categories.map((item) => (
        <Link
          className="text-gray-600 hover:text-amber-600 text-sm whitespace-nowrap"
          key={item.id}
          href={`#`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default MenuOptions;
