import { useEffect, useState } from "react";

import { GetStaticProps } from "next";
import Link from "next/link";

import { Card, Header } from "components";

import axios from "services/api";

import styles from "styles/home.module.scss";
import Filter from "components/Filter/Filter";
import Head from "next/head";

interface MovieState {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

interface MovieProps {
  cdn: string;
  locale: string;
}

export default function Home({ cdn, locale }: MovieProps): JSX.Element {
  const [movies, setMovies] = useState<Array<MovieState>>([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState<Array<number>>([]);
  const [loading, setLoading] = useState(false);

  async function fetchMovies(
    genres: Array<number>,
    page: number,
    filter = false
  ) {
    try {
      setLoading(true);
      if (filter) setSelectedPage(page);
      setSelectedGenres(genres);
      const { data } = await axios.get(`/api/movies`, {
        params: {
          locale,
          genres: genres.join(","),
          page,
        },
      });
      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function onPageChange(action: string) {
    if (selectedPage > 1 && action === "prev") {
      fetchMovies(selectedGenres, selectedPage - 1);
      setSelectedPage(selectedPage - 1);
    } else if (selectedPage < totalPages && action === "next") {
      fetchMovies(selectedGenres, selectedPage + 1);
      setSelectedPage(selectedPage + 1);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Movie | Popular</title>
      </Head>

      <Header />

      <main>
        <Filter locale={locale} search={fetchMovies} />
        <div className={styles.grid}>
          {movies.map((movie) => (
            <Link
              href={{
                pathname: `/movie/${movie.id}`,
              }}
              key={movie.id}
            >
              <Card
                title={movie.title}
                image={movie.poster_path}
                percent={movie.vote_average}
                releaseDate={movie.release_date}
                cdn={cdn}
                locale={locale}
              />
            </Link>
          ))}
        </div>
        <div className={styles.pages}>
          <button
            disabled={loading}
            className={styles.btn}
            onClick={() => onPageChange("prev")}
          >
            Anterior
          </button>
          <span className={styles.page}>
            {selectedPage} / {totalPages}
          </span>
          <button
            disabled={loading}
            className={styles.btn}
            onClick={() => onPageChange("next")}
          >
            Próximo
          </button>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      cdn: process.env.NEXTJS_CDN,
      locale,
    },
  };
};
