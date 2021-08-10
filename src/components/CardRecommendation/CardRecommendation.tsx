import { Movie } from "types/movie";
import Link from "next/link";

import styles from "./styles.module.scss";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function CardRecommendation({
  data,
  cdn,
}: {
  data: Movie;
  cdn: string;
}): JSX.Element {
  return (
    <div className={styles.container}>
      <a href={`/movie/${data.id}`}>
        <div className={styles.backdrop}>
          <img src={cdn + "/w300" + data.backdrop_path} alt={data.title} />
          <div className={styles.percent}>
            <CircularProgressbar
              value={data.vote_average * 10}
              text={data.vote_average.toFixed(1)}
              background
              backgroundPadding={6}
              styles={buildStyles({
                textSize: "25px",
                backgroundColor: "#081c22",
                textColor: "#fff",
                pathColor: data.vote_average > 7 ? "#20c574" : "#d0d331",
                trailColor: "transparent",
              })}
            />
          </div>
        </div>
        <div className={styles.details}>
          <h3>{data.title}</h3>
        </div>
      </a>
    </div>
  );
}
