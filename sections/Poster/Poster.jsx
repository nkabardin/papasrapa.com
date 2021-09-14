import Image from "next/image";
import { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import style from "./Poster.module.css";
import { menuLinks } from "../../app.config";

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
          <div className={style.text} id={menuLinks.STORY}>
            <div className={style.title}>A Story</div>
            <p>
              <strong>PAPA SRAPA</strong> is not a typical music documentary,
              but rather a condensed trip to the very heart of Noise. It is
              loaded with music that can hurt and heal, Russian weird
              avant-garde and savage vigor of its preeminent performer.
            </p>
            <p>
              The film takes us to bizarre noise festivals and performances with
              ravers, tripsters and freaks immersing into worlds of sonic
              violence and ecstatic states of mind. Together with Papa we trace
              Noise back to 1920-s, binding it to early Soviet avant-garde
              figures, such as Dziga Vertov, Arseniy Avraamov and Nikolai
              Kulbin.
            </p>
            <p>
              The craftsmаn should make his own tools - so Papa makes his of old
              Soviet radio components and cheap junk. We show it is not just
              about the way he plays them, using blood and saliva, but about the
              way he brings them to life. His weapons, known to the best part of
              Russian electronic musicians.
            </p>
          </div>
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
            <i>dive into the underground . . . </i>
          </strong>
          <p>
            Our camera followed Papa Srapa at every step and turn. We sneaked
            into numerous dim rooms and spacious halls he was performing at,
            chased him to the eerie underworld of an abandoned factory. We
            listened to his liquored up revelations on the Soviet underground -
            and tasted of his doomsday DIY synth shrieking.
          </p>
          <p>
            This film shows that Noise music was not born in Europe or Japan,
            but came to be as a bright child of a century-old tradition of
            Russian avant-garde.
          </p>
        </div>
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
