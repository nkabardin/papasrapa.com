import style from "./AppBar.module.css";
import Image from "next/image";
import { menuLinks } from "../../app.config";

// const desc = {
//   ru: (
//     <>
//       Документальный фильм
//       <br />
//       Константина Иванова и Никиты Кабардина
//     </>
//   ),
//   en: (
//     <>
//       Music documentary by
//       <br />
//       Konstantin Ivanov and Nikita Kabardin
//     </>
//   )
// };

export const AppBar = ({ lang = "en" }) => {
  const lang_link = lang === "en" ? "/ru" : "/";
  return (
    <header className={style.container}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <Image
            src="/assets/logo.svg"
            alt="PapaSrapa"
            width="200px"
            height="44px"
          />
        </div>
        <div className={style.links}>
          {/* {desc[lang]} */}
          <ul>
            <li>
              <a href={`#${menuLinks.STORY}`}>Story</a>
            </li>
            <li>
              <a href={`#${menuLinks.TRAILER}`}>Trailer</a>
            </li>
            <li>
              <a href={`#${menuLinks.TEAM}`}>Team</a>
            </li>
            <li>
              <a href={`#${menuLinks.GALLERY}`}>Gallery</a>
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
              unoptimized
            />
          </a>
          <a href="https://t.me/papasrapa" rel="noopener" title="Telegram">
            <Image
              src="/assets/telegram-white.svg"
              alt="Telegram"
              width={32}
              height={32}
              unoptimized
            />
          </a>
          <a
            href={lang_link}
            rel="noopener"
            title={lang === "en" ? "Russian" : "English"}
            className={style.lang_link}
          >
            {lang === "en" ? "ru" : "en"}
          </a>
        </div>
      </div>
    </header>
  );
};
