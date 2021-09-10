import style from "./Team.module.css";
import Image from "next/image";

export const Team = () => {
  return (
    <section className={style.container}>
      <div className={style.wrapper}>
        <div className={style.title}>The Team</div>
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
            <p>
              Cameraman <strong>Konstantin Ivanov</strong> and software
              developer <strong>Nikita Kabardin</strong> united to become a
              two-headed director. Driven to deeply research the avant-garde and
              underground culture, they called themselves Schizoproletariat.
            </p>
            <p>
              <strong>Konstantin</strong> is based in Saint Petersburg and took
              filming duties in dozens of films in Russia.
            </p>
            <p>
              <strong>Nikita</strong> is based in Stockholm where he works on
              projects like Spotify and Battlefield and started a production
              company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
