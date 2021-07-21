import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Head } from "../sections/Head";
import { AppBar } from "../sections/AppBar";
import { Footer } from "../sections/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <AppBar />
      <main className={styles.main}></main>
      <Footer />
    </div>
  );
}
