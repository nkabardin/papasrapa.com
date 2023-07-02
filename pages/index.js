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
import {Title} from "../sections/Title/Title";
import {menuLinks} from "../app.config";

export default function Home() {
  const organize = (
    <a href={`/${menuLinks.CONTACT}`} style={{ color: "white",
      border: "1px solid white",
      padding: "16px",
      borderRadius: "5px",
      textDecoration: "none",
      display: "block",
      margin: "100px auto",
      fontWeight: "bold",
      fontSize: "1.2rem",
      backgroundColor: "rgba(20, 110, 20, 0.7)",
      boxShadow: "0 0 10px 5px rgba(20, 110, 20, 0.80)"

    }}>
      Organize a screening in your city
    </a>
  )
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
          {organize}
        </div>
        <Poster />
        {/*<Teaser />*/}
        {/*<Dive />*/}
        <Team />
        <Gallery />
        <div>
          {organize}
        </div>
        <Credits />
      </main>

      <Footer />
    </div>
  );
}
