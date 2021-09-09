import styles from "../sections/ru/Home.module.css";
import { Head } from "../sections/ru/Head";
import { AppBar } from "../sections/AppBar";
import { Footer } from "../sections/Footer";
import { Hero } from "../sections/ru/Hero";
import { AboutMovie } from "../sections/ru/AboutMovie";
import { Teaser } from "../sections/ru/Teaser";
import { AboutCharacter } from "../sections/ru/AboutCharacter";
import { BeforePapa } from "../sections/ru/BeforePapa";
import { PapaSints } from "../sections/ru/PapaSints";
import { Perfomance } from "../sections/ru/Perfomance";
import { Shaman } from "../sections/ru/Shaman";
import { Movie } from "../sections/ru/Movie";
import { Team } from "../sections/ru/Team";
import { Credits } from "../sections/Credits";
import { Poster } from "../sections/Poster";
import { Gallery } from "../sections/Gallery";

export default function Home() {
  return (
    <div className={styles.container}>
      <div
        className={styles.background}
        style={{ "--background-img": "url(/assets/back_02.webp)" }}
      />
      <Head />
      <AppBar lang="ru" />
      <main className={styles.main}>
        <Hero />
        <AboutMovie />
        <Teaser />
        <AboutCharacter />
        <BeforePapa />
        <PapaSints />
        <Perfomance />
        <Shaman />
        <Movie />
        <Team />
        <Gallery />
        <Credits />
        <Poster lang="ru" />
      </main>
      <Footer />
    </div>
  );
}
