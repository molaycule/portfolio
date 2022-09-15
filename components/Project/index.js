import Link from "next/link";
import Image from "next/image";
import styles from "./Project.module.css";
import dayjs from "dayjs";

export default function Projects({
  title,
  shortDescription,
  techStack,
  slug,
  image,
  role,
  date
}) {
  return (
    <Link href={slug}>
      <a className={styles.project}>
        <div className={styles.projectSubInfoContainer}>
          <div className={styles.projectSubInfoContent}>
            <div className={styles.projectRoleContainer}>
              <p className={styles.projectRole}>{role}</p>
            </div>
            <p className={styles.projectDate}>
              {dayjs(date).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>
        <div className={styles.projectMainInfoContainer}>
          <div className={styles.projectMainInfoContent}>
            <p className={styles.projectTitle}>{title}</p>
            <div className={styles.projectDescription}>
              <p>{shortDescription}</p>
              <p>Tech Stack: {techStack}</p>
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
            <Image src={image} alt={title} layout="fill" />
          </div>
        </div>
      </a>
    </Link>
  );
}
