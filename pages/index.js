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

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <AppBar />
      <Title />
      <div
        className="background"
        style={{ "--background-img": "url(/assets/back_02.webp)" }}
      />
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
  );
}
