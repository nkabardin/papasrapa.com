import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Head } from "../sections/Head";
import { AppBar } from "../sections/AppBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <AppBar />
      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
