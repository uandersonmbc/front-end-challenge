import Link from "next/link";

import styles from "./styles.module.scss";

export default function Header(): JSX.Element {
  return (
    <div className={styles.container}>
      <span>Brand</span>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
