import style from "./Screenings.module.css";
import Image from "next/image";
import { menuLinks } from "../../app.config";

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

export const Screenings = () => {
  return (
    <section className={style.container}>
      <div className={style.wrapper}>
        <div className={style.title}>Festivals & Screenings</div>
        <div className={style.content}>
          <div className={style.photo}>
            <Image
              src="/assets/artdokfest.jpg"
              alt="Vitaly Mansky presents Papa Srapa at ArtDocFest"
              width={470}
              height={318}
            />
            <div className={style.team_names}>
              <div className={style.name}>
                <ExternalLink href="https://en.wikipedia.org/wiki/Vitaly_Mansky">
                  Vitaly Mansky
                </ExternalLink>{" "}
                presenting movie at{" "}
                <ExternalLink href="https://artdocfest.com/en/">
                  ArtDocFest
                </ExternalLink>{" "}
              </div>
            </div>
          </div>
          <div className={style.text}>
            <p>
              The movie, being a debut project, had 2 sold out screenings at
              most prominent Russian documentary festival{" "}
              <ExternalLink href="https://artdocfest.com/en/">
                ArtDokFest
              </ExternalLink>
              . Check out the{" "}
              <ExternalLink href="https://www.youtube.com/watch?v=OMKFr15CrM8">
                {" "}
                video report
              </ExternalLink>{" "}
              on how that did happen (in russian with subtitles).
            </p>
            <p>
              Also, the movie was shown in Switzerland at{" "}
              <ExternalLink href="https://2021.luff.ch/public/en/film/papa-srapa">
                Lausanne Underground Film&Music Festival
              </ExternalLink>{" "}
              (video coming soon) and in Poland (
              <ExternalLink href="https://sputnikfestiwal.pl/2021/film-pl_488">
                Sputnik Festival
              </ExternalLink>
              ) and Montenegro (
              <ExternalLink href="https://zimamagazine.com/2021/09/marat-gelman-o-festivale-slovonovo-chudo-na-fone-pandemii/">
                {" "}
                SlovoNovo Festival
              </ExternalLink>
              ).
            </p>
            <p>
              We&apos;re currently applying to more festivals and looking for
              connections in the movie industry. Check out our{" "}
              <ExternalLink href="https://www.youtube.com/watch?v=PNkK0AJ7MXE&feature=emb_title">
                bomb teaser
              </ExternalLink>
              .
            </p>
            <p>
              <a
                href={`/${menuLinks.CONTACT}`}
                style={{ textDecoration: "underline" }}
              >
                Drop us a line
              </a>{" "}
              to request the screener or to have a coffee with us in Paris or
              Saint Petersburg.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
