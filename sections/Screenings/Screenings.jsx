import style from "./Screenings.module.css";
import Image from "next/image";

const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "underline" }}
  >
    {children}
  </a>
);

const SCREENINGS = [
  {
    date: "April 4, 2021",
    venue: "ArtDocFest / Kinoteatr Oktyabr",
    city: "Moscow",
    link: "https://artdocfest.com/en/movie/papa_srapa_2020_74/",
    comment: null,
  },
  {
    date: "April 23, 2021",
    venue: "Victoria Underground",
    city: "Samara",
    link: "https://vk.com/event203848128",
  },
  {
    date: "May 9, 2021",
    venue: "s-m-e-n-a",
    city: "Kazan",
    link: "https://s-m-e-n-a.org/2021/04/22/premera-filma-papa-srapa-v-kazani/",
  },
  {
    date: "May 16, 2021",
    venue: "“Research Institute of Noise” (НИИ Шума)",
    city: "Saint Petersburg",
    link: "https://www.youtube.com/watch?v=J8ykIILe-vg",
    comment: "Screening + Papa Srapa live show",
  },
  {
    date: "May 18, 2021",
    venue: "Uspeh Bar",
    city: "Moscow",
    link: "https://www.facebook.com/bar.uspex/posts/822522",
    comment: "Screening + Papa Srapa live show",
  },
  {
    date: "May 20, 2021",
    venue: "Art-space “Teplo”",
    city: "Yaroslavl",
    link: "https://vk.com/teplo_art_space?w=wall-201903_1030",
  },
  {
    date: "September 30, 2021",
    venue: "SlovoNovo Festival",
    city: "Montenegro",
    link: "https://zimamagazine.com/2021/09/marat-gelman-o-festivale-slovonovo-chudo-na-fone-pandemii/",
  },
  {
    date: "October 24, 2021",
    venue: "Ecole de Jazz et de Musique / LUFF festival",
    city: "Lausanne",
    link: "https://2021.luff.ch/public/en/film/papa-srapa",
  },
  {
    date: "November 22, 2021",
    venue: "Kino Luna / Sputnik Festival",
    city: "Warsaw",
    link: "https://prestoportal.pl/festiwal-sputnik-film-dokumentalny-papa-srapa",
  },
  {
    date: "March 24, 2022",
    venue: "Gallery “Post”",
    city: "Novosibirsk",
    link: "https://vk.com/wall-144112935_48?&w=wall-211078513_3",
  },
  {
    date: "April 3, 2022",
    venue: "Kinematograf",
    city: "Zelenograd",
    link: "https://t.me/kinematografclub/248",
  },
  {
    date: "April 9, 2022",
    venue: "f0rth.space",
    city: "Tbilisi",
    link: "https://www.instagram.com/p/CcDoiGsL7m7/?img_index=1",
  },
  {
    date: "April 16, 2022",
    venue: "Center of modern art “Fligel”",
    city: "Vladimir",
    link: "https://vk.com/wall-201572026_86",
  },
  {
    date: "May 13, 2022",
    venue: "Novaya Gazeta",
    city: "Online Docfest",
    link: "https://nkabardin.notion.site/292b0490ae9d42f0ad456a628ca53ed7?pvs=25",
  },
  {
    date: "May 19, 2022",
    venue: "Leokino / Diametrale Festival",
    city: "Innsbruck",
    link: "https://leokino.at/index.php?disp=film&fid=F15629",
  },
  {
    date: "May 20, 2022",
    venue: "Art-Farm Margaritovo",
    city: "Rostov Oblast",
    link: "https://vk.com/papasrapafest",
  },
  {
    date: "May 21, 2022",
    venue: "Regional Museum of Art",
    city: "Murmansk",
    link: "https://nord-news.ru/news/2022/05/09/?newsid=144487",
  },
  {
    date: "May 21, 2022",
    venue: "Gallery of Experimental Sound",
    city: "Saint Petersburg",
    link: "https://www.youtube.com/watch?v=bkGaeS3eqvc",
    comment: "Tribute concert + screening",
  },
  {
    date: "May 25, 2022",
    venue: "Cultural Center DOM",
    city: "Moscow",
    link: "https://dom.com.ru/events/5062/",
  },
  {
    date: "June 30, 2022",
    venue: "Art Gallery “Republic IZO”",
    city: "Barnaul",
    link: "https://www.instagram.com/p/CfWM6sbLj-U/",
  },
  {
    date: "July 2, 2022",
    venue: "Modern Art Festival",
    city: "Vologda",
    link: "https://www.facebook.com/papasrapamovie/",
  },
  {
    date: "August 13, 2022",
    venue: "Creative Space D30",
    city: "Rostov on Don",
    link: "https://www.facebook.com/papasrapamovie/photos/600257538394197/?locale=ms_MY&paipv=0&eav=Afa7EhS3chd-q8hq4YYQyYuyImowAo6yN4o9kG6L6N5cGDGHgpodGYedvG6SmlezcuY&_rdr",
    comment: "Tribute concert + screening",
  },
  {
    date: "November 4, 2022",
    venue: "Gallery Krasnokholmskaya",
    city: "Moscow",
    link: "https://galereya-krasnokholmskaya.ru/exhibitions/2022/papa-srapa/",
  },
  {
    date: "December 22, 2022",
    venue: "Can",
    city: "Bryansk",
    link: "https://t.me/papasrapa/388",
    comment: "2 noise performances + screening",
  },
  {
    date: "May 12, 2023",
    venue: "Filmhuis Cavia",
    city: "Amsterdam",
    link: "https://www.instagram.com/p/CsTQmKWowGg/",
    comment: "Kryptogen Rundfunk live + screening",
  },
  {
    date: "May 14, 2023",
    venue: "798 Art Zone",
    city: "Beijing",
    link: "https://mp.weixin.qq.com/s/Dc_vkLyYV2hPk1uHwKWk8w",
  },
  {
    date: "July 4, 2023",
    venue: "Vera Zienema",
    city: "Groningen",
    link: "https://www.vera-groningen.nl/events/papa-srapa/?lang=en",
  },
];

SCREENINGS.reverse();

export const Screenings = () => {
  return (
    <section className={style.container} id="screenings">
      <h3>Screenings</h3>
      <ul style={{ padding: 0 }}>
        {SCREENINGS.map((screening) => (
          <li
            key={`${screening.date}_${screening.venue}`}
            className={style.item}
          >
            {screening.date}&nbsp;/&nbsp;
            {screening.city}, &nbsp;
            {screening.link ? (
              <a href={screening.link} target="_blank" rel="noreferrer">
                {screening.venue}
              </a>
            ) : (
              screening.venue
            )}
            {screening.comment && (
              <>
                . <span> {screening.comment}</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
