import Image from "next/image";
import posterImage from "../public/assets/new_poster.png";
import logoImage from "../public/assets/footer_logo2.svg";

export const Title = () => {
  return (
    <section className="tablet:mt-6">
      <div className="flex bg-black gap-5 p-2.5 flex-wrap items-center justify-center">
        <div>
          <Image
            src={posterImage}
            alt="Papa Srapa (2021) movie poster"
            width={270}
            height={380}
            placeholder="blur"
          />
        </div>
        <div className="max-w-[350px] font-bold text-white">
          <h3 className="m-[revert] text-[19px]">Papa Srapa — 2021 — 75 min</h3>
          <h3 className="m-[revert] text-[19px]">
            World premiere&nbsp;
            <a
              className="underline"
              href="https://artdocfest.com/en/movie/papa_srapa_2020_74/"
            >
              ArtDokFest
            </a>
            , European premiere&nbsp;
            <a
              className="underline"
              href="https://2021.luff.ch/public/en/film/papa-srapa"
            >
              LUFF
            </a>
            ,&nbsp; screened in Netherlands, Austria, Switzerland, China,
            Russia, Poland, Georgia, Montenegro.
          </h3>
          <h4 className="m-[revert]">
            <a
              className="underline"
              href="https://www.kinopoisk.ru/film/4446102/?utm_referrer=www.google.com"
            >
              Kinopoisk
            </a>{" "}
            8.1,&nbsp;
            <a
              className="underline"
              href="https://www.imdb.com/title/tt15724292/"
            >
              IMDb 8.7
            </a>
            ,&nbsp; youtube premiere coming soon to&nbsp;
            <a
              className="underline"
              href="https://www.youtube.com/@schizoproletariat"
            >
              Schizoproletariat
            </a>{" "}
            channel
          </h4>
          <Image
            src={logoImage}
            alt="Schizoproletariat logo"
            width={116}
            height={40}
          />
        </div>
      </div>
    </section>
  );
};
