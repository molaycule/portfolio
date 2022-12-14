import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.css";
import ContentfulContext from "../../contexts/ContentfulContext";
import { useContext } from "react";

export default function NavBar() {
  const { linkedIn, github } = useContext(ContentfulContext);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContent}>
        <Link href="/">
          <a className={styles.navLink}>
            <Image src="/home.svg" alt="Home" width={20} height={20} />
          </a>
        </Link>
        <div className={styles.navExternalLinkContainer}>
          <Link href={linkedIn}>
            <a className={styles.navLink}>
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                width={20}
                height={20}
              />
            </a>
          </Link>
          <Link href={github}>
            <a className={styles.navLink}>
              <Image src="/code.svg" alt="code" width={20} height={20} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
