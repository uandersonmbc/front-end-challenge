import { memo } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { formatDates } from "utils/helpers";
import { CardMovieProps } from "./types";
import config from "configs/global.json";
import styles from "./styles.module.scss";

export default memo(function CardMovie({
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
              backgroundColor: "#081c22",
              textColor: "#fff",
              pathColor: percent > 7 ? "#20c574" : "#d0d331",
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
});
