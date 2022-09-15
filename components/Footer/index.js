import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import ContentfulContext from "../../contexts/ContentfulContext";
import { useContext } from "react";

export default function Footer() {
  const { linkedIn, github } = useContext(ContentfulContext);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinkContainer}>
        <Link href={linkedIn}>
          <a className={styles.footerLink}>
            <Image src="/linkedin.svg" alt="linkedin" width={20} height={20} />
          </a>
        </Link>
        <Link href={github}>
          <a className={styles.footerLink}>
            <Image src="/code.svg" alt="code" width={20} height={20} />
          </a>
        </Link>
      </div>
    </footer>
  );
}
