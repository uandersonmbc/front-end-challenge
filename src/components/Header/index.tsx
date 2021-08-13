import Link from "next/link";

import styles from "./styles.module.scss";

export default function Header(): JSX.Element {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>Movies</a>
      </Link>
      <nav className={styles.navbar}></nav>
    </div>
  );
}
