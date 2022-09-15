import Image from "next/image";
import styles from "./Hero.module.css";
import ContentfulContext from "../../contexts/ContentfulContext";
import { useContext } from "react";

export default function Hero() {
  const { name, title, bio, banner, profile } = useContext(ContentfulContext);

  return (
    <div className={styles.container}>
      <div className={styles.heroImageWrapper}>
        <Image
          className={styles.heroImage}
          src={`https:${banner.fields.file.url}`}
          alt="banner"
          layout="fill"
        />
      </div>
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.profileImageWrapper}>
            <Image
              src={`https:${profile.fields.file.url}`}
              alt="profile"
              width={165}
              height={315}
            />
          </div>
          <div className={styles.profileContentWrapper}>
            <div className={styles.bioContainer}>
              <p className={styles.bio}>{bio}</p>
            </div>
            <div className={styles.profileContainer}>
              <p className={styles.profileName}>{name}</p>
              <p className={styles.profileTitle}>{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
