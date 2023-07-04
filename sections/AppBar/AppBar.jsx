import style from "./AppBar.module.css";
import { menuLinks } from "../../constants/menuLinks";
import Link from "next/link";

export const AppBar = () => {
  return (
    <header className={style.container}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <img
            src="/assets/logo.svg"
            alt="PapaSrapa"
            width="200px"
            height="44px"
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
            <img
              src="/assets/instagram-white.svg"
              alt="Instagram"
              width={32}
              height={32}
            />
          </a>
          <a href="https://t.me/papasrapa" rel="noopener" title="Telegram">
            <img
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
