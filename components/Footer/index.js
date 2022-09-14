import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinkContainer}>
        <Link href="/">
          <a className={styles.footerLink}>
            <Image src="/linkedin.svg" alt="linkedin" width={20} height={20} />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.footerLink}>
            <Image src="/code.svg" alt="code" width={20} height={20} />
          </a>
        </Link>
      </div>
    </footer>
  );
}
