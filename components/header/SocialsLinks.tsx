import Image from "next/image";

const SocialsLinks = () => {
  return (
    <div className="flex flex-row items-center gap-3 px-22.5">
      <Image
        src="/Instagram.png"
        alt="Instagram"
        width={24}
        height={24}
        className="w-5 h-5"
      />
      <Image
        src="/FB.png"
        alt="Facebook"
        width={24}
        height={24}
        className="w-3 h-4.5"
      />
      <Image
        src="/telegram.png"
        alt="Telegram"
        width={24}
        height={24}
        className="w-[17.39px] h-[15.28px]"
      />
    </div>
  );
};

export default SocialsLinks;
