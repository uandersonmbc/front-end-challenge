import Link from "next/link";

import styles from "./styles.module.scss";

export default function Header(): JSX.Element {
  return (
    <div className={styles.container}>
      <Link href="/dashboard">Dashboard</Link>
      <nav className={styles.navbar}></nav>
    </div>
  );
}
