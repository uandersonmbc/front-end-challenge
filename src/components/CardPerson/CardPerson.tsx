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
      <div className={styles.profile}>
        {data.profile_path && (
          <img src={cdn + config.wrapper + data.profile_path} alt={data.name} />
        )}
      </div>
      <div className={styles.details}>
        <h3>{data.name}</h3>
        <p>{data.character}</p>
      </div>
    </div>
  );
}
