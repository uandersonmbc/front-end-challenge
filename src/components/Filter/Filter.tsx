import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.scss";

import { Genre } from "types/genre";
import { storedGenres } from "utils/storage";

export default function Filter({
  locale,
  search,
}: {
  locale: string;
  search: (genres: Array<number>, page: number, filter: boolean) => void;
}) {
  const [genres, setGenres] = useState<Array<Genre>>([]);
  const [selected, setSelected] = useState<Array<number>>([]);

  async function fetchGenres() {
    const selectedGenres = storedGenres.get();
    const { data } = await axios.get("/api/genres", {
      params: {
        locale,
      },
    });
    setGenres(data);

    if (selectedGenres.length) {
      setSelected(selectedGenres);
      search(selectedGenres, 1, true);
    } else {
      search([], 1, true);
    }
  }

  function onClear() {
    storedGenres.clear();
    setSelected([]);
  }

  function onSearch() {
    search(selected, 1, true);
  }

  function onSelect(genre: number) {
    if (selected.indexOf(genre) >= 0) {
      const newSelected = selected.filter((g) => g !== genre);
      setSelected(newSelected);
      storedGenres.set(newSelected);
    } else {
      const newSelected = selected.concat(genre);
      setSelected(newSelected);
      storedGenres.set(newSelected);
    }
  }

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerTitle}>Filter</div>

      <div className={styles.content}>
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={`${styles.btnGenre} ${
              selected.includes(genre.id) && styles.btnCheck
            }`}
            onClick={() => onSelect(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>
      <div className={styles.footer}>
        <button className={styles.btnClear} onClick={() => onClear()}>
          Limpar
        </button>
        <button className={styles.btnSearch} onClick={() => onSearch()}>
          Pesquisar
        </button>
      </div>
    </div>
  );
}
