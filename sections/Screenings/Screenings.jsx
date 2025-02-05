import style from "./Screenings.module.css";
import React from "react";
import { RU, CH, NL, PL, ME, GE, AT, CN, BE, IT, FR, US, RS } from 'country-flag-icons/react/3x2'


const COUNTRIES = {
  RU: {
    name: "Russia",
    flag: RU
  },
  CH: {
    name: "Switzerland",
    flag: CH
  },
  NL: {
    name: "Netherlands",
    flag: NL
  },
  PL: {
    name: "Poland",
    flag: PL
  },
  ME: {
    name: "Montenegro",
    flag: ME
  },
  GE: {
    name: "Georgia",
    flag: GE
  },
  AT: {
    name: "Austria",
    flag: AT
  },
  CN: {
    name: "China",
    flag: CN
  },
  BE: {
    name: "Belgium",
    flag: BE
  },
  IT: {
    name: "Italy",
    flag: IT
  },
  FR: {
    name: "France",
    flag: FR
  },
  US: {
    name: "USA",
    flag: US
  },
  SR: {
    name: "Serbia",
    flag: RS
  }
}

const SCREENINGS = [
  {
    date: "April 4, 2021",
    venue: "ArtDocFest / Kinoteatr Oktyabr",
    city: "Moscow",
    link: "https://artdocfest.com/en/movie/papa_srapa_2020_74/",
    comment: null,
    countryCode: "RU"
  },
  {
    date: "April 23, 2021",
    venue: "Victoria Underground",
    city: "Samara",
    link: "https://vk.com/event203848128",
    countryCode: "RU"
  },
  {
    date: "May 9, 2021",
    venue: "s-m-e-n-a",
    city: "Kazan",
    link: "https://s-m-e-n-a.org/2021/04/22/premera-filma-papa-srapa-v-kazani/",
    countryCode: "RU"
  },
  {
    date: "May 16, 2021",
    venue: "“Research Institute of Noise” (НИИ Шума)",
    city: "Saint Petersburg",
    link: "https://www.youtube.com/watch?v=J8ykIILe-vg",
    comment: "Screening + Papa Srapa live show",
    countryCode: "RU"
  },
  {
    date: "May 18, 2021",
    venue: "Uspeh Bar",
    city: "Moscow",
    link: "https://www.facebook.com/bar.uspex/posts/822522",
    comment: "Screening + Papa Srapa live show",
    countryCode: "RU"
  },
  {
    date: "May 20, 2021",
    venue: "Art-space “Teplo”",
    city: "Yaroslavl",
    link: "https://vk.com/teplo_art_space?w=wall-201903_1030",
    countryCode: "RU"
  },
  {
    date: "September 30, 2021",
    venue: "SlovoNovo Festival",
    city: "Montenegro",
    link: "https://zimamagazine.com/2021/09/marat-gelman-o-festivale-slovonovo-chudo-na-fone-pandemii/",
    countryCode: "ME"
  },
  {
    date: "October 24, 2021",
    venue: "Ecole de Jazz et de Musique / LUFF festival",
    city: "Lausanne",
    link: "https://2021.luff.ch/public/en/film/papa-srapa",
    countryCode: "CH"
  },
  {
    date: "November 22, 2021",
    venue: "Kino Luna / Sputnik Festival",
    city: "Warsaw",
    link: "https://prestoportal.pl/festiwal-sputnik-film-dokumentalny-papa-srapa",
    countryCode: "PL"
  },
  {
    date: "March 24, 2022",
    venue: "Gallery “Post”",
    city: "Novosibirsk",
    link: "https://vk.com/wall-144112935_48?&w=wall-211078513_3",
    countryCode: "RU"
  },
  {
    date: "April 3, 2022",
    venue: "Kinematograf",
    city: "Zelenograd",
    link: "https://t.me/kinematografclub/248",
    countryCode: "RU"
  },
  {
    date: "April 9, 2022",
    venue: "f0rth.space",
    city: "Tbilisi",
    link: "https://www.instagram.com/p/CcDoiGsL7m7/?img_index=1",
    countryCode: "GE"
  },
  {
    date: "April 16, 2022",
    venue: "Center of modern art “Fligel”",
    city: "Vladimir",
    link: "https://vk.com/wall-201572026_86",
    countryCode: "RU"
  },
  {
    date: "May 13, 2022",
    venue: "Novaya Gazeta",
    city: "Online Docfest",
    link: "https://nkabardin.notion.site/292b0490ae9d42f0ad456a628ca53ed7?pvs=25",
    countryCode: "RU"
  },
  {
    date: "May 19, 2022",
    venue: "Leokino / Diametrale Festival",
    city: "Innsbruck",
    link: "https://leokino.at/index.php?disp=film&fid=F15629",
    countryCode: "AT"
  },
  {
    date: "May 20, 2022",
    venue: "Art-Farm Margaritovo",
    city: "Rostov Oblast",
    link: "https://vk.com/papasrapafest",
    countryCode: "RU"
  },
  {
    date: "May 21, 2022",
    venue: "Regional Museum of Art",
    city: "Murmansk",
    link: "https://nord-news.ru/news/2022/05/09/?newsid=144487",
    countryCode: "RU"
  },
  {
    date: "May 21, 2022",
    venue: "Gallery of Experimental Sound",
    city: "Saint Petersburg",
    link: "https://www.youtube.com/watch?v=bkGaeS3eqvc",
    comment: "Tribute concert + screening",
    countryCode: "RU"
  },
  {
    date: "May 25, 2022",
    venue: "Cultural Center DOM",
    city: "Moscow",
    link: "https://dom.com.ru/events/5062/",
    countryCode: "RU"
  },
  {
    date: "June 30, 2022",
    venue: "Art Gallery “Republic IZO”",
    city: "Barnaul",
    link: "https://www.instagram.com/p/CfWM6sbLj-U/",
    countryCode: "RU"
  },
  {
    date: "July 2, 2022",
    venue: "Modern Art Festival",
    city: "Vologda",
    link: "https://www.facebook.com/papasrapamovie/",
    countryCode: "RU"
  },
  {
    date: "August 13, 2022",
    venue: "Creative Space D30",
    city: "Rostov on Don",
    link: "https://www.facebook.com/papasrapamovie/photos/600257538394197/?locale=ms_MY&paipv=0&eav=Afa7EhS3chd-q8hq4YYQyYuyImowAo6yN4o9kG6L6N5cGDGHgpodGYedvG6SmlezcuY&_rdr",
    comment: "Tribute concert + screening",
    countryCode: "RU"
  },
  {
    date: "November 4, 2022",
    venue: "Gallery Krasnokholmskaya",
    city: "Moscow",
    link: "https://galereya-krasnokholmskaya.ru/exhibitions/2022/papa-srapa/",
    countryCode: "RU"
  },
  {
    date: "December 22, 2022",
    venue: "Can",
    city: "Bryansk",
    link: "https://t.me/papasrapa/388",
    comment: "2 noise performances + screening",
    countryCode: "RU"
  },
  {
    date: "May 12, 2023",
    venue: "Filmhuis Cavia",
    city: "Amsterdam",
    link: "https://www.instagram.com/p/CsTQmKWowGg/",
    comment: "Kryptogen Rundfunk live + screening",
    countryCode: "NL"
  },
  {
    date: "May 14, 2023",
    venue: "798 Art Zone",
    city: "Beijing",
    link: "https://mp.weixin.qq.com/s/Dc_vkLyYV2hPk1uHwKWk8w",
    countryCode: "CN"
  },
  {
    date: "July 4, 2023",
    venue: "Vera Zienema",
    city: "Groningen",
    link: "https://www.vera-groningen.nl/events/papa-srapa/?lang=en",
    countryCode: "NL"
  },
  {
    date: "September 9, 2023",
    venue: "SeP",
    city: "Shanghai",
    countryCode: "CN",
  },
  {
    date: "September 10, 2023",
    venue: "The PO",
    city: "Ningbo",
    countryCode: "CN",
  },
  {
    date: "September 13, 2023",
    venue: "DEMO",
    city: "Yangshuo",
    countryCode: "CN",
  },
  {
    date: "October 7, 2023",
    venue: "VinylCafé",
    city: "Lanzhou",
    countryCode: "CN",
  },
  {
    date: "November 4-5, 2023",
    venue: "FUGUI",
    city: "Ordos, Inner Mongolia",
    countryCode: "CN",
  },
  {
    date: "January 26, 2024",
    venue: "Terzo Piano Autogestito",
    city: "Naples",
    countryCode: "IT",
    comment: "Screening + Noise performances"
  },
  {
    date: "January 28, 2024",
    venue: "Centro Sociale Autogestito Next-Emerson",
    city: "Florence",
    countryCode: "IT",
    comment: "Screening + Noise performances"
  },
  {
    date: "February 9, 2024",
    venue: "MONA",
    city: "Brussels",
    countryCode: "BE",
    comment: "Screening + Noise performances"
  },
  {
    date: "February 10, 2024",
    venue: "Café de Paris",
    city: "Paris",
    countryCode: "FR",
    comment: "Screening + Noise performances"
  },
  {
    date: "September 18, 2024",
    venue: "VisArt Video",
    city: "Charlotte, North Carolina",
    countryCode: "US",
    comment: "Screening + Q&A on Zoom + Live Performance of Leo Wolf"
  },
  {
    date: "October 6, 2024",
    venue: "RAY bar",
    city: "Novi Sad",
    countryCode: "SR",
    comment: "Screening + Q&A on Zoom + Live Performance of Ilya Belorukov"
  },
  {
    date: "February 21, 2025",
    venue: "L'Armande asbl",
    city: "Liège",
    countryCode: "BE",
    comment: "Screening + performances by Dolphin Hospital and Maria Komarova",
    link: "https://www.facebook.com/events/1556553428359019/"
  },
  {
    date: "March 22, 2025",
    venue: "Libera Collina di Castello",
    city: "Genoa",
    countryCode: "IT",
    comment: "Screening + live performances / Noisefest Vol. 2",
    link: "https://www.facebook.com/liberacollinadicastello/"
  },
  {
    date: "March 28, 2025",
    venue: "VisArt Video",
    city: "Charlotte, North Carolina",
    countryCode: "US",
    comment: "Screening + Q&A on Zoom + Live Performance of Leo Wolf",
    link: "https://visartvideo.org/events/papa-srapa-a-trip-to-the-very-heart-of-noise-avant-garde-music/"
  },
];

SCREENINGS.reverse();

export const Screenings = () => {
  return (
    <section className={style.container} id="screenings">
      <h3>Screenings <span style={{ opacity: "0.5" }}>({SCREENINGS.length} total)</span></h3>
      <ul style={{ padding: "12px 0 0 0" }}>
        {SCREENINGS.map((screening) => (
          <li
            key={`${screening.date}_${screening.venue}`}
            className={style.item}
          >
            {
              screening.countryCode && COUNTRIES[screening.countryCode] ? (
                <div className={style.flag}>
                  {React.createElement(COUNTRIES[screening.countryCode].flag, {
                    title: COUNTRIES[screening.countryCode].name,
                    style: { width: "20px", height: "20px" }
                  })}
                </div>
              ) : null
            }
            {screening.date}&nbsp;/&nbsp;
            {screening.city}
             &nbsp;/&nbsp;
            {screening.link ? (
              <a href={screening.link} target="_blank" rel="noreferrer">
                {screening.venue}
              </a>
            ) : (
              screening.venue
            )}
            {screening.comment && (
              <>
                <span style={{ fontSize: "10px ", marginLeft: "5px", }}> {screening.comment}</span>
              </>
            )}

          </li>
        ))}
      </ul>
    </section>
  );
};
