import Image from "next/image";
import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={style.container}>
      <Image
        src="/assets/footer_logo2.svg"
        alt="logo"
        width={290}
        height={100}
        unoptimized
      />
    </footer>
  );
};
