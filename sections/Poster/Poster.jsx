import Image from "next/image";
import { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import style from "./Poster.module.css";
import { Story } from "./Story";
import Fade from "react-reveal/Fade";

export const Poster = () => {
  const images = [
    {
      src: "/assets/new_poster.jpg",
      caption: "PapaSrapa movie poster"
    },
    {
      src: "/photos/handmade_1.jpg",
      src_pre: "/photos/handmade_1_240.jpg",
      caption: "Handmade transistor by PapaSrapa"
    },
    {
      src: "/photos/handmade_2.jpg",
      src_pre: "/photos/handmade_2_240.jpg",
      caption: "Handmade transistor by PapaSrapa"
    },
    {
      src: "/photos/papa_young.jpg",
      src_pre: "/photos/papa_young_400.jpg",
      caption: "Eduard Srapionov aka PapaSrapa"
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback(index => {
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
              alt={images[0].caption}
              onClick={() => openLightbox(0)}
              unoptimized
            />
          </div>
          <Story />
        </div>
      </div>
      <div className={style.wrapper_next}>
        <div className={style.foto_handmaid}>
          <div className={style.handmaid_top}>
            <Image
              src={images[1].src_pre}
              width={240}
              height={240}
              objectFit="cover"
              alt={images[1].caption}
              onClick={() => openLightbox(1)}
              unoptimized
            />
          </div>
          <div className={style.handmaid_bottom}>
            <Image
              src={images[2].src_pre}
              width={240}
              height={240}
              objectFit="cover"
              alt={images[2].caption}
              onClick={() => openLightbox(2)}
              unoptimized
            />
          </div>
        </div>
        <div className={style.next_text}>
          <strong>
            <Fade delay={450} duration={3000}>
              <i>dive into the underground . . . </i>
            </Fade>
          </strong>
          <Fade left>
            <p>
              Our camera followed Papa Srapa at every step and turn. We sneaked
              into numerous dim rooms and spacious halls he was performing at,
              chased him to the eerie underworld of an abandoned factory. We
              listened to his liquored up revelations on the Soviet underground
              - and tasted of his doomsday DIY synth shrieking.
            </p>
          </Fade>
          <Fade right delay={150}>
            <p>
              This film shows that Noise music was not born in Europe or Japan,
              but came to be as a bright child of a century-old tradition of
              Russian avant-garde.
            </p>
          </Fade>
        </div>
        {/* <div className={style.foto_papa + " " + (inView ? style.inView : "")}> */}
        <div className={style.foto_papa}>
          <Image
            src={images[3].src_pre}
            width={400}
            height={500}
            objectFit="cover"
            alt={images[3].caption}
            onClick={() => openLightbox(3)}
            unoptimized
          />
        </div>
      </div>
      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map(item => ({
                ...item,
                source: item.src
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
    </div>
  );
};
