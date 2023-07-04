import { Head } from "../sections/Head";
import styles from "../styles/Home.module.css";

import { AppBar } from "../sections/AppBar";
import { Hero } from "../sections/Hero";
import { Gallery } from "../sections/Gallery";
import { Credits } from "../sections/Credits";
import { Poster } from "../sections/Poster";
import { Footer } from "../sections/Footer";
import { Team } from "../sections/Team";
import { Screenings } from "../sections/Screenings";
import { Title } from "../sections/Title/Title";
import { OrganizeScreeningButton } from "../components/OrganizeScreeningButton";
import Image from "next/image";
import bgImage from "../public/assets/back_02.webp";

export default function Home() {
  return (
    <div>
      <div className="background-wrap">
        <Image
          alt="Papa Srapa"
          src={bgImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className={styles.container}>
        <Head />
        <AppBar />
        <Title />
        <main className={styles.main}>
          <Hero />
          <Screenings />
          <div>
            <OrganizeScreeningButton />
          </div>
          <Poster />
          <Team />
          <Gallery />
          <div>
            <OrganizeScreeningButton />
          </div>
          <Credits />
        </main>

        <Footer />
      </div>
    </div>
  );
}
