import Image from "next/image";
import logoImage from "../../public/assets/footer_logo2.svg";

export const Footer = () => {
  return (
    <footer className="w-full h-[100px] pb-4 bg-black flex items-center justify-center">
      <Image
        src={logoImage}
        alt="Schizoproletariat logo"
        width={290}
        height={100}
      />
    </footer>
  );
};
