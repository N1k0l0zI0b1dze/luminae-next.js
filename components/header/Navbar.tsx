import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Help & Support", href: "#" },
  ];

  return (
    <nav className="flex items-center gap-6">
      {navLinks.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="text-gray-700 hover:text-amber-600 text-sm whitespace-nowrap"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
