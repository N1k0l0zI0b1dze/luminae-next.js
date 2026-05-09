import Image from "next/image";

const fashionDeals = [
  {
    id: 1,
    badge: "New Arrivals",
    image: "/2girls.png",
    title: "Cool & Sexy Calvin Klein",
    description: "Dotted dress-Casual",
    price: 89,
    buttonText: "Shop Now",
  },

  {
    id: 2,
    image: "/top.png",
    title: "Cool & Sexy Calvin Klein",
    description: "Dotted dress-Casual",
    price: 89,
    buttonText: "Shop Now",
  },

  {
    id: 3,
    badge: "New Arrivals",
    image: "/glasses-girl.png",
    title: "beige coat Zara",
    description: "Cream-Brown-Formal",
    price: 102,
    buttonText: "Shop Now",
  },
];

const TrendingCards = () => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {fashionDeals.map((item) => (
        <div key={item.id} className="relative rounded-lg overflow-hidden">
          {/* IMAGE */}
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />

          {/* BADGE */}
          {item.badge && (
            <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded">
              <div className="flex flex-row gap-1">
                <Image
                  src="/arrivalIcon.png"
                  alt="badge"
                  width={16}
                  height={16}
                />
                {item.badge}
              </div>
            </div>
          )}

          {/* BOTTOM INFO */}
          <div className="absolute bottom-0 left-0 w-full bg-black/85 px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white text-lg font-bold">{item.title}</h3>

                <p className="text-gray-300 text-sm mt-1">{item.description}</p>
              </div>

              <button className="border border-white text-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black transition-colors cursor-pointer">
                ${item.price} {item.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingCards;
