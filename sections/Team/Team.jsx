import style from "./Team.module.css";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import { menuLinks } from "../../constants/menuLinks";

export const Team = () => {
  return (
    <section className={style.container} id={menuLinks.TEAM}>
      <div className={style.wrapper}>
        <Fade duration={2000} delay={200}>
          <div className={style.title}>The Team</div>
        </Fade>
        <div className={style.content}>
          <div className={style.photo}>
            <Image
              src="/assets/team.jpg"
              alt="Konstantin Ivanov & Nikita Kabardin"
              width={1024 * 0.4}
              height={616 * 0.4}
              unoptimized
            />
            <div className={style.team_names}>
              <div className={style.name}>Konstantin Ivanov</div>
              <div className={style.name}>Nikita Kabardin</div>
            </div>
          </div>
          <div className={style.text}>
            <Fade right>
              <p>
                Cameraman <strong>Konstantin Ivanov</strong> and software
                developer <strong>Nikita Kabardin</strong> united to become a
                two-headed director. Driven to deeply research the avant-garde
                and underground culture, they called themselves
                Schizoproletariat.
              </p>
            </Fade>
            <Fade right delay={100}>
              <p>
                <strong>Konstantin</strong> is based in Saint Petersburg and
                took filming duties in dozens of films in Russia.
              </p>
            </Fade>
            <Fade right delay={200}>
              <p>
                <strong>Nikita</strong> is based in Paris and works in media and
                tech (clients including Warner Brothers/Discovery, Spotify and
                Battlefield).
              </p>
            </Fade>
            <Fade left delay={400}>
              <p style={{ padding: "32px 0px" }}>
                <a
                  href={`#${menuLinks.CREDITS}`}
                  style={{
                    color: "white",
                    border: "1px solid white",
                    padding: "14px",
                  }}
                >
                  See full credits
                </a>
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
