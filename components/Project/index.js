import Link from "next/link";
import Image from "next/image";
import styles from "./Project.module.css";

export default function Projects() {
  return (
    <Link href="/">
      <a className={styles.project}>
        <div className={styles.projectSubInfoContainer}>
          <div className={styles.projectSubInfoContent}>
            <div className={styles.projectRoleContainer}>
              <p className={styles.projectRole}>Team Lead</p>
            </div>
            <p className={styles.projectDate}>Jul 20, 2022</p>
          </div>
        </div>
        <div className={styles.projectMainInfoContainer}>
          <div className={styles.projectMainInfoContent}>
            <p className={styles.projectTitle}>Pura Vida</p>
            <div className={styles.projectDescription}>
              <p>
                Pura Vida is a website for finding and booking luxurious beach
                houses for vacation and short-let apartments; an admin panel for
                managing properties, invoices, and reservations.
              </p>
              <p>Tech Stack: Typescript, Lit-html, Next.js, Rollup, Node.js</p>
            </div>
            <div className={styles.projectMoreDetails}>
              <span className={styles.projectMoreDetailsLinkText}>
                Read more
              </span>
              <span className={styles.projectMoreDetailsArrowContainer}>
                <span className={styles.projectMoreDetailsArrow}></span>
              </span>
            </div>
          </div>
          <div className={styles.projectMainInfoImage}>
            <Image src="/pura-vida.jpg" alt="Pura Vida" layout="fill" />
          </div>
        </div>
      </a>
    </Link>
  );
}
