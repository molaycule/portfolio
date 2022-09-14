import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.heroImageWrapper}>
        <Image
          className={styles.heroImage}
          src="/hero.jpg"
          alt="hero"
          layout="fill"
        />
      </div>
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.profileImageWrapper}>
            <Image src="/profile.jpg" alt="profile" width={165} height={315} />
          </div>
          <div className={styles.profileContentWrapper}>
            <div className={styles.bioContainer}>
              <p className={styles.bio}>
                Frontend Engineer, interested in automation and web performance.
                Worked mainly with modern web frameworks and technologies to
                build a better web experience for everyone.
              </p>
            </div>
            <div className={styles.profileContainer}>
              <p className={styles.profileName}>Mohammed Agboola</p>
              <p className={styles.profileTitle}>Frontend Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
