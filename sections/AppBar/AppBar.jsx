import style from "./AppBar.module.css";
// import Image from "next/image";
import {menuLinks} from "../../app.config";

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

export const AppBar = ({lang = "en"}) => {
  const lang_link = lang === "en" ? "/ru" : "/";
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
          {/* {desc[lang]} */}

          <ul>
            <li>
              <a href={`#${menuLinks.SCREENINGS}`}>
                {lang === "en" ? "Screenings" : "Показы"}
              </a>
            </li>
            <li>
              <a href={`#${menuLinks.STORY}`}>
                {lang === "en" ? "Story" : "История"}
              </a>
            </li>
            {/*<li>*/}
            {/*  <a href={`#${menuLinks.TRAILER}`}>*/}
            {/*    {lang === "en" ? "Trailer" : "Трейлер"}*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li>
              <a href={`#${menuLinks.TEAM}`}>
                {lang === "en" ? "Team" : "Команда"}
              </a>
            </li>
            <li>
              <a href={`#${menuLinks.GALLERY}`}>
                {lang === "en" ? "Gallery" : "Галерея"}
              </a>
            </li>
            <li>
              <a href={`/${menuLinks.CONTACT}`}>
                {lang === "en" ? "Contact" : "Контакты"}
              </a>
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
              // unoptimized
            />
          </a>
          <a href="https://t.me/papasrapa" rel="noopener" title="Telegram">
            <img
              src="/assets/telegram-white.svg"
              alt="Telegram"
              width={32}
              height={32}
              // unoptimized
            />
          </a>
          {/*<a*/}
          {/*  href={lang_link}*/}
          {/*  rel="noopener"*/}
          {/*  title={lang === "en" ? "Russian" : "English"}*/}
          {/*  className={style.lang_link}*/}
          {/*>*/}
          {/*  {lang === "en" ? "ru" : "en"}*/}
          {/*</a>*/}
        </div>
      </div>
    </header>
  )
    ;
};
