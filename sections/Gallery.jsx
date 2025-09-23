import Image from "next/image";
import { useCallback, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { menuLinks } from "../constants/menuLinks";
import img0 from "../public/gallery/1.jpg";
import img1 from "../public/gallery/2.jpg";
import img2 from "../public/gallery/3.jpg";
import img3 from "../public/gallery/4.jpg";
import img4 from "../public/gallery/5.jpg";
import img5 from "../public/gallery/6.jpg";
import img6 from "../public/gallery/7.jpg";
import img7 from "../public/gallery/8.jpg";
import img8 from "../public/gallery/9.jpg";
import img9 from "../public/gallery/10.jpg";
import img10 from "../public/gallery/11.jpg";
import img11 from "../public/gallery/12.jpg";
import img12 from "../public/gallery/13.jpg";

const images = [
  {
    source: "/gallery/1.jpg",
    caption: "PapaSrapa backstage",
  },
  {
    source: "/gallery/2.jpg",
    caption: "PapaSrapa backstage",
  },
  {
    source: "/gallery/3.jpg",
    caption: "PapaSrapa backstage",
  },
  {
    source: "/gallery/4.jpg",
    caption: "PapaSrapa backstage",
  },
  {
    source: "/gallery/5.jpg",
    caption: "PapaSrapa backstage",
  },
  {
    source: "/gallery/6.jpg",
    caption: "PapaSrapa backstage",
  },
  {
    source: "/gallery/7.jpg",
    caption: "PapaSrapa backstage",
  },
  {
    source: "/gallery/8.jpg",
    caption: "PapaSrapa backstage",
  },
  {
    source: "/gallery/9.jpg",
    caption: "PapaSrapa backstage",
  },
  {
    source: "/gallery/10.jpg",
    caption: "PapaSrapa backstage",
  },
  {
    source: "/gallery/11.jpg",
    caption: "PapaSrapa backstage",
  },
  {
    source: "/gallery/12.jpg",
    caption: "PapaSrapa backstage",
  },
  {
    source: "/gallery/13.jpg",
    caption: "PapaSrapa backstage",
  },
];

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
            placeholder="blur"
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
              quality={100}
              placeholder="blur"
              onClick={() => openLightbox(1)}
            />
            <Image
              src={img2}
              className={smallImgClasses}
              alt="PapaSrapa backstage"
              quality={100}
              placeholder="blur"
              onClick={() => openLightbox(2)}
            />
          </div>
          <div className="flex gap-2.5">
            <Image
              src={img3}
              className={smallImgClasses}
              alt="PapaSrapa backstage"
              quality={100}
              placeholder="blur"
              onClick={() => openLightbox(3)}
            />
            <Image
              src={img4}
              className={smallImgClasses}
              alt="PapaSrapa backstage"
              quality={100}
              placeholder="blur"
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
              quality={100}
              placeholder="blur"
              onClick={() => openLightbox(5)}
            />
            <Image
              src={img6}
              className={smallImgClasses}
              alt="PapaSrapa backstage"
              quality={100}
              placeholder="blur"
              onClick={() => openLightbox(6)}
            />
          </div>
          <div className="flex gap-2.5">
            <Image
              src={img7}
              className={smallImgClasses}
              alt="PapaSrapa backstage"
              quality={100}
              placeholder="blur"
              onClick={() => openLightbox(7)}
            />
            <Image
              src={img8}
              className={smallImgClasses}
              alt="PapaSrapa backstage"
              quality={100}
              placeholder="blur"
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
            placeholder="blur"
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
            placeholder="blur"
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
            placeholder="blur"
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
            placeholder="blur"
            alt="PapaSrapa backstage"
            onClick={() => openLightbox(12)}
          />
        </div>
      </div>

      {viewerIsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="w-full max-w-4xl carousel-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white text-2xl z-50 bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-70"
              onClick={closeLightbox}
            >
              ×
            </button>
            <style jsx global>{`
              .carousel-container .carousel .slide {
                background: transparent;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 80vh;
              }
              .carousel-container .carousel .control-arrow {
                font-size: 24px;
                background: rgba(0, 0, 0, 0.5);
                height: 50px;
                width: 50px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 20px;
              }
              .carousel-container .carousel .control-arrow:hover {
                background: rgba(0, 0, 0, 0.7);
              }
              .carousel-container .carousel .legend {
                background: rgba(0, 0, 0, 0.7);
                opacity: 1;
                bottom: 0;
                margin-bottom: 0;
              }
            `}</style>
            <Carousel
              selectedItem={currentImage}
              showArrows={true}
              showStatus={false}
              showIndicators={true}
              infiniteLoop={true}
              useKeyboardArrows={true}
              dynamicHeight={true}
              emulateTouch={true}
            >
              {images.map((item, index) => (
                <div key={index} className="h-full">
                  <img src={item.source} alt={item.caption} className="max-h-[80vh] object-contain mx-auto" />
                  {item.caption && (
                    <p className="legend">{item.caption}</p>
                  )}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};
