import { Decoration } from "../components/Decoration";
import { data } from "../data";
import style from "./AboutCharacter.module.css";
import {
  LINE,
  RECT,
  SQUARE,
  SQUARE_BIG,
  SQUARE_MEDIUM,
  TEXT10,
  TEXT20
} from "../components/Decoration";

export const AboutCharacter = () => {
  return (
    <div className={style.container}>
      <div className={style.bg_image_wrapper}>
        <div className={style.bg_image} />
      </div>

      <div className={style.wrapper}>
        <div className={style.logo}>
          <img src="/assets/logo.svg" alt="papa srapa" />
        </div>
        <Decoration top="199px" left="275px" {...LINE} />
        <Decoration
          top="401px"
          left="191px"
          xs="--left: 81px; --top: 429px;"
          sm="--left: 84px; --top: 325px;"
          {...LINE}
        />
        <Decoration top="603px" left="-394px" {...LINE} css="--z-index: 0;" />
        <Decoration
          top="72px"
          left="459px"
          xs="--left: -360px; --top: 755px;"
          sm="--left: 527px; --top: 351px;"
          {...SQUARE_MEDIUM}
        />

        <Decoration top="218px" left="170px" md="--left: 40px;" {...RECT} />
        <Decoration top="407px" left="460px" {...RECT} />

        <Decoration
          top="35px"
          left="510px"
          xs="--left: 510px; --top: 35px;"
          {...TEXT20}
          css="--z-index: 0;"
        >
          {data.text_content.desc_back_1}
        </Decoration>
        <Decoration
          top="455px"
          left="180px"
          xs="--left: -250px; --top: 470px;"
          md="--left: 30px; --top: 218px;"
          {...TEXT10}
          css="--z-index: 0;"
        >
          {data.text_content.desc_back_2}
        </Decoration>
        <Decoration top="615px" left="740px" {...TEXT10} css="--z-index: 0;">
          {data.text_content.desc_back_2}
        </Decoration>

        <Decoration
          top="561px"
          left="743px"
          {...SQUARE}
          bgColor="#2e2e2e"
          css="--z-index: 0;"
        />
        <Decoration top="665px" left="659px" {...SQUARE} css="--z-index: 0;" />
        <Decoration
          top="581px"
          left="784px"
          xs="--left: 236px; --top: 642px;"
          sm="--left: 482px; --top: 496px;"
          {...SQUARE_BIG}
          css="--z-index: 0;"
        />
        {/*PHOTOS*/}
        <div className={style.photo_top}>
          <img
            src="/photos/character1.jpg"
            alt="PapaSrapa"
            width="340px"
            height="226px"
          />
        </div>
        <div className={style.photo_middle}>
          <img
            src="/photos/character2.jpg"
            alt="PapaSrapa"
            width="230px"
            height="306px"
          />
        </div>
        <div className={style.photo_bottom}>
          <img
            src="/photos/character3.jpg"
            alt="PapaSrapa"
            width="410px"
            height="273px"
          />
        </div>

        {/* TEXT */}
        <div className={style.text + " " + style.text_top}>
          {data.text_content.desc_character_top}
        </div>
        <div className={style.text + " " + style.text_bottom}>
          {data.text_content.desc_character_bottom}
        </div>
      </div>
    </div>
  );
};
