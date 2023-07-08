import Image from "next/image";
import style from "./Footer.module.css";
import logoImage from "../../public/assets/footer_logo2.svg";

export const Footer = () => {
  return (
    <footer className={style.container}>
      <Image
        src={logoImage}
        alt="Schizoproletariat logo"
        width={290}
        height={100}
      />
    </footer>
  );
};
