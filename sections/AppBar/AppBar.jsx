import style from "./AppBar.module.css";
import { menuLinks } from "../../constants/menuLinks";

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
              <a href={`#${menuLinks.SCREENINGS}`}>Screenings</a>
            </li>
            <li>
              <a href={`#${menuLinks.STORY}`}>Story</a>
            </li>
            <li>
              <a href={`#${menuLinks.TEAM}`}>Team</a>
            </li>
            <li>
              <a href={`#${menuLinks.GALLERY}`}>Gallery</a>
            </li>
            <li>
              <a href={`/${menuLinks.CONTACT}`}>Contact</a>
            </li>
            <li>
              <a href={`#${menuLinks.CREDITS}`}>Credits</a>
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
