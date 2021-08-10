import { Person } from "types/movie";
import styles from "./styles.module.scss";

import config from "configs/global.json";

export default function CardPerson({
  data,
  cdn,
}: {
  data: Person;
  cdn: string;
}): JSX.Element {
  return (
    <div className={styles.container}>
      <img src={cdn + config.wrapper + data.profile_path} alt="" />
      <div className={styles.details}>
        <h3>{data.name}</h3>
        <p>{data.character}</p>
      </div>
    </div>
  );
}
