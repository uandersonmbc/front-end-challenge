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
  const [page, setPage] = useState(1);

  async function fetchMovies(
    genres: Array<string>,
    page: number
  ): Promise<any> {
    const { data } = await axios.get(`/api/movies`, {
      params: {
        locale,
        genres: genres.join(","),
      },
    });
    setMovies(data.results);
  }

  async function getPage() {
    // const storedPage = sessionStorage.getItem("page") || 1;
    // setPage(storedPage);
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
              <a>
                <Card
                  title={movie.title}
                  image={movie.poster_path}
                  percent={movie.vote_average}
                  releaseDate={movie.release_date}
                  cdn={cdn}
                  locale={locale}
                />
              </a>
            </Link>
          ))}
        </div>
        <div>
          <button>Carregar mais</button>
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
