import Link from "next/link";

import styles from "./styles.module.scss";

export default function Header(): JSX.Element {
  return (
    <div className={styles.container}>
      <span>Movies</span>
      <nav className={styles.navbar}></nav>
    </div>
  );
}
