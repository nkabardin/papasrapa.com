import { Head } from "../sections/Head";
import styles from "../styles/Home.module.css";

import { AppBar } from "../sections/AppBar";
import { Hero } from "../sections/Hero";
import { Gallery } from "../sections/Gallery";
import { Credits } from "../sections/Credits";
import { Poster } from "../sections/Poster";
import { Footer } from "../sections/Footer";
import { Teaser } from "../sections/Teaser";
import { Team } from "../sections/Team";
import { Dive } from "../sections/Dive";
import { Screenings } from "../sections/Screenings";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <AppBar />
      <div
        className="background"
        style={{ "--background-img": "url(/assets/back_02.webp)" }}
      />
      <main className={styles.main}>
        <Hero />
        <Poster />
        <Screenings />
        <Teaser />
        <Dive />
        <Team />
        <Gallery />
        <Credits />
      </main>

      <Footer />
    </div>
  );
}
