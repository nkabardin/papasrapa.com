import Image from "next/image";
import { menuLinks } from "../constants/menuLinks";
import teamImg from "../public/assets/team.jpg";
import { motion } from "framer-motion";

export const Team = () => {
  return (
    <section
      className="bg-black/70 w-full w960:px-8 text-white"
      id={menuLinks.TEAM}
    >
      <div className="bg-black/60 max-w-[1200px] flex flex-col justify-center m-auto p-8 w-full">
        <motion.div
          className="text-5xl font-bold font-chakra z-40 align-left uppercase pb-6"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 2, delay: 0.25 },
          }}
          viewport={{ once: true }}
        >
          The Team
        </motion.div>
        <div className="flex w-full flex-col w960:flex-row">
          <div className="w-[470px] w960:min-w-[400px] min-w-[0] max-w-full w960:max-w-[470px] self-center w960:self-start">
            <Image
              src={teamImg}
              alt="Konstantin Ivanov & Nikita Kabardin"
              width={410}
              height={246}
              placeholder="blur"
              quality={100}
            />
            <div className="flex w-auto max-w-[400px] gap-4 justify-around items-center text-xl mt-2">
              <div className="text-center">Konstantin Ivanov</div>
              <div className="text-center">Nikita Kabardin</div>
            </div>
          </div>
          <div className="text-xl mt-2 ml-0 py-4 bg-black max-w-full flex-grow flex-shrink w960:mt-0 w960:ml-8 w960:max-w-[640px]">
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
