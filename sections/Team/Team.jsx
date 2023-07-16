import style from "./Team.module.css";
import Image from "next/image";
import { menuLinks } from "../../constants/menuLinks";
import teamImg from "../../public/assets/team.jpg";
import { motion } from "framer-motion";

export const Team = () => {
  return (
    <section className={style.container} id={menuLinks.TEAM}>
      <div className={style.wrapper}>
        <motion.div
          className={style.title}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 2, delay: 0.25 },
          }}
          viewport={{ once: true }}
        >
          The Team
        </motion.div>
        <div className={style.content}>
          <div className={style.photo}>
            <Image
              src={teamImg}
              alt="Konstantin Ivanov & Nikita Kabardin"
              width={410}
              height={246}
              placeholder="blur"
              quality={100}
            />
            <div className={style.team_names}>
              <div className={style.name}>Konstantin Ivanov</div>
              <div className={style.name}>Nikita Kabardin</div>
            </div>
          </div>
          <div className={style.text}>
            <motion.p
              initial={{ x: 400, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { type: "spring", damping: 20 },
              }}
              viewport={{ once: true }}
              className="pb-2"
            >
              Cameraman <strong>Konstantin Ivanov</strong> and software
              developer <strong>Nikita Kabardin</strong> united to become a
              two-headed director. Driven to deeply research the avant-garde and
              underground culture, they called themselves Schizoproletariat.
            </motion.p>
            <motion.p
              initial={{ x: 400, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { type: "spring", damping: 20, delay: 0.1 },
              }}
              viewport={{ once: true }}
              className="pb-2"
            >
              <strong>Konstantin</strong> is based in Saint Petersburg and took
              filming duties in dozens of films in Russia.
            </motion.p>
            <motion.p
              initial={{ x: 400, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { delay: 0.2, type: "spring", damping: 20 },
              }}
              viewport={{ once: true }}
              className="pb-2"
            >
              <strong>Nikita</strong> is based in Paris and works in media and
              tech (clients including Warner Brothers/Discovery, Spotify and
              Battlefield).
            </motion.p>
            <motion.p
              style={{ padding: "32px 0px" }}
              initial={{ x: -400, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { delay: 0.4, type: "spring", damping: 20 },
              }}
              viewport={{ once: true }}
            >
              <a
                href={`#${menuLinks.CREDITS}`}
                className="text-white border border-white p-3.5"
              >
                See full credits
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
