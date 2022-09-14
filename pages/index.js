import Head from "next/head";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Project from "../components/Project";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohammed Agboola</title>
        <meta
          name="description"
          content="Front-end Engineer, interested in automation and web performance. Worked mainly with JavaScript build tools & frameworks."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <Hero />
        <div className={styles.projectsContainer}>
          <Project />
        </div>
      </main>
    </>
  );
}
