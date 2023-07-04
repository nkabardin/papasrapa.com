import Image from "next/image";
import { useCallback, useState } from "react";
import { images } from "./data";
import Carousel, { Modal, ModalGateway } from "react-images";
import { menuLinks } from "../../constants/menuLinks";
import img0 from "../../public/gallery/1.jpg";
import img1 from "../../public/gallery/2.jpg";
import img2 from "../../public/gallery/3.jpg";
import img3 from "../../public/gallery/4.jpg";
import img4 from "../../public/gallery/5.jpg";
import img5 from "../../public/gallery/6.jpg";
import img6 from "../../public/gallery/7.jpg";
import img7 from "../../public/gallery/8.jpg";
import img8 from "../../public/gallery/9.jpg";
import img9 from "../../public/gallery/10.jpg";
import img10 from "../../public/gallery/11.jpg";
import img11 from "../../public/gallery/12.jpg";
import img12 from "../../public/gallery/13.jpg";

export const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  const smallImgClasses =
    "object-cover object-center aspect-square max-w-[50%] hover:cursor-pointer";
  const midImgWrapClasses = "aspect-square max-w-[33.33%] w-full relative";
  const midImgClasses =
    "object-cover object-center aspect-square hover:cursor-pointer";

  return (
    <div
      className="w-full bg-black max-w-full overflow-hidden flex flex-col gap-2.5"
      id={menuLinks.GALLERY}
    >
      <div className="flex gap-2.5">
        <div className="w-full max-w-[50%] aspect-square relative">
          <Image
            src={img0}
            className="object-cover hover:cursor-pointer"
            fill
            quality={100}
            unoptimized
            alt="PapaSrapa backstage"
            onClick={() => openLightbox(0)}
          />
        </div>
        <div className="flex flex-col max-w-[50%] gap-2.5">
          <div className="flex gap-2.5">
            <Image
              src={img1}
              className={smallImgClasses}
              alt="PapaSrapa backstage"
              onClick={() => openLightbox(1)}
            />
            <Image
              src={img2}
              className={smallImgClasses}
              alt="PapaSrapa backstage"
              onClick={() => openLightbox(2)}
            />
          </div>
          <div className="flex gap-2.5">
            <Image
              src={img3}
              className={smallImgClasses}
              alt="PapaSrapa backstage"
              onClick={() => openLightbox(3)}
            />
            <Image
              src={img4}
              className={smallImgClasses}
              alt="PapaSrapa backstage"
              onClick={() => openLightbox(4)}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-2.5">
        <div className="flex flex-col max-w-[50%] gap-2.5 overflow-hidden">
          <div className="flex gap-2.5">
            <Image
              src={img5}
              className={smallImgClasses}
              alt="PapaSrapa backstage"
              onClick={() => openLightbox(5)}
            />
            <Image
              src={img6}
              className={smallImgClasses}
              alt="PapaSrapa backstage"
              onClick={() => openLightbox(6)}
            />
          </div>
          <div className="flex gap-2.5">
            <Image
              src={img7}
              className={smallImgClasses}
              alt="PapaSrapa backstage"
              onClick={() => openLightbox(7)}
            />
            <Image
              src={img8}
              className={smallImgClasses}
              alt="PapaSrapa backstage"
              onClick={() => openLightbox(8)}
            />
          </div>
        </div>
        <div className="w-full max-w-[50%] aspect-square relative">
          <Image
            src={img9}
            className="object-cover hover:cursor-pointer"
            fill
            quality={100}
            unoptimized
            alt="PapaSrapa backstage"
            onClick={() => openLightbox(9)}
          />
        </div>
      </div>
      <div className="flex gap-2.5 w-full">
        <div className={midImgWrapClasses}>
          <Image
            src={img10}
            className={midImgClasses}
            fill
            quality={100}
            alt="PapaSrapa backstage"
            onClick={() => openLightbox(10)}
          />
        </div>
        <div className={midImgWrapClasses}>
          <Image
            src={img11}
            className={midImgClasses}
            fill
            quality={100}
            alt="PapaSrapa backstage"
            onClick={() => openLightbox(11)}
          />
        </div>
        <div className={midImgWrapClasses}>
          <Image
            src={img12}
            className={midImgClasses}
            fill
            quality={100}
            alt="PapaSrapa backstage"
            onClick={() => openLightbox(12)}
          />
        </div>
      </div>

      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map((item) => ({
                ...item,
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
    </div>
  );
};
