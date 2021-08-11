import Link from "next/link";

import styles from "./styles.module.scss";

export default function Header(): JSX.Element {
  return (
    <div className={styles.container}>
      <span>Brand</span>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a>Idioma</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
