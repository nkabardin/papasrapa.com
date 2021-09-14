import { Decoration } from "../components/Decoration";
import { ButtonLink } from "../components/ButtonLink";
import { data } from "../data";
import style from "./AboutMovie.module.css";
import {
  LINE,
  RECT,
  SQUARE,
  SQUARE_BIG,
  SQUARE_MEDIUM,
  TEXT10,
  TEXT20
} from "../components/Decoration";
import { menuLinks } from "../../../app.config";

export const AboutMovie = () => {
  return (
    <section className={style.container} id={menuLinks.STORY}>
      <div className={style.wrapper}>
        <Decoration
          top="164px"
          left="10%"
          sm="--left: 107px; --top: 164px;"
          {...LINE}
        />
        <Decoration
          top="289px"
          left="23%"
          sm="--left: 117px; --top: 265px;"
          {...LINE}
        />
        <Decoration
          top="620px"
          left="14%"
          sm="--left: -37px; --top: 759px;"
          {...LINE}
        />
        <Decoration top="162px" left="39%" {...SQUARE_MEDIUM} />
        <Decoration
          top="308px"
          left="175px"
          sm="--left: 30px; --top: 218px;"
          md="--left: 40px;"
          index={-1}
          {...RECT}
        />
        <Decoration
          top="452px"
          left="442px"
          sm="--left: 123px; --top: 395px;"
          {...RECT}
        />
        <Decoration top="125px" left="515px" {...TEXT20}>
          {data.text_content.desc_back_1}
        </Decoration>
        <Decoration
          top="605px"
          left="65px"
          xs="--left: -250px; --top: 570px;"
          {...TEXT10}
        >
          {data.text_content.desc_back_2}
        </Decoration>
        <Decoration bottom="-1px" left="748px" {...SQUARE} />
        <Decoration
          bottom="-55px"
          left="789px"
          sm="--left: -33px; --top: 617px;"
          {...SQUARE_BIG}
        />
        <div className={style.title}>О фильме</div>
        <div className={style.description}>{data.text_content.desc_about}</div>
        <div className={style.buttons_wrapper}>
          <ButtonLink
            anchor="Анкета фильма на АртДокФесте"
            link={data.link_art_fest}
          />
          <ButtonLink
            anchor="Telegram-канал проекта"
            link={data.social.telegram}
            yellow
          />
        </div>
      </div>
    </section>
  );
};
