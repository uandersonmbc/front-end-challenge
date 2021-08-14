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
  search: (genres: Array<number>, page: number) => Promise<any>;
}) {
  const [genres, setGenres] = useState<Array<Genre>>([]);
  const [selected, setSelected] = useState<Array<number>>([]);

  async function fetchGenres() {
    const selectedGenres = await storedGenres.get();
    const page = await storedGenres.get();
    const { data } = await axios.get("/api/genres", {
      params: {
        locale,
      },
    });
    setGenres(data);

    if (selectedGenres) {
      setSelected(JSON.parse(selectedGenres));
      search(JSON.parse(selectedGenres), 1);
    } else {
      search([], 1);
    }
  }

  function onClear() {
    storedGenres.clear();
    setSelected([]);
  }

  function onSearch() {
    search(selected, 1);
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
