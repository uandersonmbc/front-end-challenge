import { useEffect, useState } from "react";

import { GetStaticProps } from "next";
import Link from "next/link";

import { Card, Header } from "components";

import axios from "services/api";

import styles from "styles/home.module.scss";

interface MovieState {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

interface MovieProps {
  cdn: string;
}

export default function Home({ cdn }: MovieProps): JSX.Element {
  const [movies, setMovies] = useState<Array<MovieState>>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/movies");
      setMovies(data.results);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.grid}>
        {movies.map((movie) => (
          <Link
            href={{
              pathname: `/movie/${movie.id}`,
            }}
            key={movie.id}
          >
            <a>
              <Card
                title={movie.title}
                image={movie.poster_path}
                percent={movie.vote_average}
                releaseDate={movie.release_date}
                cdn={cdn}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      cdn: process.env.NEXTJS_CDN,
    },
  };
};
