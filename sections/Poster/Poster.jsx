import style from "./Poster.module.css";
import { Story } from "./Story";

export const STORY_IMAGES = [
  {
    src: "/assets/new_poster.jpg",
    caption: "PapaSrapa movie poster",
  },
  {
    src: "/photos/handmade_1.jpg",
    src_pre: "/photos/handmade_1_240.jpg",
    caption: "Handmade transistor by PapaSrapa",
  },
  {
    src: "/photos/handmade_2.jpg",
    src_pre: "/photos/handmade_2_240.jpg",
    caption: "Handmade transistor by PapaSrapa",
  },
  {
    src: "/photos/papa_young.jpg",
    src_pre: "/photos/papa_young_400.jpg",
    caption: "Eduard Srapionov aka PapaSrapa",
  },
];

export const Poster = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.content}>
          <Story />
        </div>
      </div>
    </div>
  );
};
