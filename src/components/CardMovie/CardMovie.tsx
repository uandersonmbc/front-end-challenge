import styles from "./style.module.css";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { formatDates } from "utils/helpers";

import { CardMovieProps } from "./types";

import config from "configs/global.json";

export default function CardMovie({
  title,
  releaseDate,
  percent,
  image,
  cdn,
}: CardMovieProps) {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={cdn + config.wrapper + image} alt={title} />
        <div
          style={{ width: "40px", height: "40px" }}
          className={styles.percent}
        >
          <CircularProgressbar
            value={percent * 10}
            text={percent.toFixed(1)}
            background
            backgroundPadding={6}
            styles={buildStyles({
              textSize: "25px",
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </div>
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
