import styles from "./style.module.css";

import { formatDates } from "utils/helpers";

import { CardMovieProps } from "./types";

import config from "configs/global.json";

function CardMovie({ title, releaseDate, percent, image }: CardMovieProps) {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={config.cdn + image} alt={title} />
        <span className={styles.percent}>
          {percent * 10}
          <span style={{ fontSize: 8 }}>%</span>
        </span>
      </div>
      <div className={styles.container}>
        <span className={styles.title}>{title}</span>
        <br />
        <span className={styles.releaseDate}>
          Lançamento: {formatDates(new Date(releaseDate), "pt-BR")}
        </span>
      </div>
    </div>
  );
}

export default CardMovie;
