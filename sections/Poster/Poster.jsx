import Image from "next/image";
import { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import style from "./Poster.module.css";
import { Story } from "./Story";
import Fade from "react-reveal/Fade";

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
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.content}>
          <div className={style.poster}>
            <Image
              src="/assets/new_poster.png"
              width={450}
              height={634}
              alt={STORY_IMAGES[0].caption}
              onClick={() => openLightbox(0)}
              unoptimized
            />
          </div>
          <Story />
        </div>
      </div>
      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={STORY_IMAGES.map((item) => ({
                ...item,
                source: item.src,
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
    </div>
  );
};
