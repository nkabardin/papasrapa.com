import {useEffect, useState} from "react";
import Image from "next/image";
import {STORY_IMAGES} from "../Poster";

export const Title = ({lang = "en"}) => {

  return (
    <section style={{ margin: "25px 0"}}>
      <div style={{
        display: "flex", justifyContent: "center", backgroundColor: "#000000",
        alignItems: "center", padding: "10px", flexDirection: "row", flexWrap: "wrap",
        gap: "30px"
      }}>

        <div>
          <Image
            src="/assets/new_poster.png"
            width={450 * 0.6}
            height={634 * 0.6}
            alt={"Papa Srapa (2021) movie poster"}
            onClick={() => openLightbox(0)}
            unoptimized
          />
        </div>
        <div style={{maxWidth: "350px"}}>
          <h3 style={{color: "white"}}>Papa Srapa — 2021 — 75 min</h3>
          <h3 style={{color: "white"}}>
            World premiere&nbsp;
            <a style={{textDecoration: "underline"}}
               href="https://artdocfest.com/en/movie/papa_srapa_2020_74/">ArtDokFest</a>,
            European premiere&nbsp;
            <a style={{textDecoration: "underline"}}
               href="https://2021.luff.ch/public/en/film/papa-srapa">LUFF</a>,&nbsp;
            screened in Netherlands, Austria, Switzerland, China,
            Russia, Poland, Turkey, Georgia, Montenegro.
          </h3>
          <h4 style={{color: "white"}}>
            <a style={{textDecoration: "underline"}}
               href="https://www.kinopoisk.ru/film/4446102/?utm_referrer=www.google.com">Kinopoisk</a> 8.1,&nbsp;
            <a style={{textDecoration: "underline"}}
              href="https://www.imdb.com/title/tt15724292/">IMDb 8.7</a>
            ,&nbsp;
            youtube premiere coming soon to&nbsp;
            <a style={{textDecoration: "underline"}}
               href="https://www.youtube.com/@schizoproletariat">Schizoproletariat</a> channel
          </h4>
          <Image
            src="/assets/footer_logo2.svg"
            alt="logo"
            width={290 * 0.4}
            height={100 * 0.4}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};
