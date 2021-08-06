import styles from "./style.module.css";

import { formatDates } from "utils/helpers";

function CardMovie() {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/9E76j2DcQv8LdbX1Wa9jpbDBfw1.jpg"
          alt=""
        />
        <span className={styles.percent}>81%</span>
      </div>
      <div className={styles.container}>
        <span className={styles.title}>
          O Poderoso Chefinho 2: Negócios da Família
        </span>
        <br />
        <span className={styles.releaseDate}>
          {formatDates(new Date("2021-05-28"), "pt-BR")}
        </span>
      </div>
    </div>
  );
}

export default CardMovie;
