import style from "./AppBar.module.css";
import { menuLinks } from "../../constants/menuLinks";
import Link from "next/link";
import Image from "next/image";

export const AppBar = () => {
  return (
    <header className={style.container}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <Image
            src="/assets/logo.svg"
            alt="PapaSrapa"
            width={200}
            height={44}
          />
        </div>
        <div className={style.links}>
          <ul>
            <li>
              <Link href={`#${menuLinks.SCREENINGS}`}>Screenings</Link>
            </li>
            <li>
              <Link href={`#${menuLinks.STORY}`}>Story</Link>
            </li>
            <li>
              <Link href={`#${menuLinks.TEAM}`}>Team</Link>
            </li>
            <li>
              <Link href={`#${menuLinks.GALLERY}`}>Gallery</Link>
            </li>
            <li>
              <Link href={`/${menuLinks.CONTACT}`}>Contact</Link>
            </li>
            <li>
              <Link href={`#${menuLinks.CREDITS}`}>Credits</Link>
            </li>
          </ul>
        </div>
        <div className={style.social}>
          <a
            href="https://www.instagram.com/papa_srapa/"
            rel="noopener"
            title="Instagram"
          >
            <Image
              src="/assets/instagram-white.svg"
              alt="Instagram"
              width={32}
              height={32}
            />
          </a>
          <a href="https://t.me/papasrapa" rel="noopener" title="Telegram">
            <Image
              src="/assets/telegram-white.svg"
              alt="Telegram"
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
    </header>
  );
};
