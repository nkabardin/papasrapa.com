import style from "./Team.module.css";
import Image from "next/image";
import { menuLinks } from "../../app.config";
import Fade from "react-reveal/Fade";

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
              src="/assets/team.webp"
              alt="Konstantin Ivanov & Nikita Kabardin"
              width={470}
              height={318}
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
                <strong>Nikita</strong> is based in Paris and works as a
                software engineer (with projects like Spotify and Battlefield).
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
