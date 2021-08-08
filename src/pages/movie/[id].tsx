import Head from "next/head";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";

import { getKeywords, getDetailsMovie } from "services/movies";

import { MovieProps } from "types/movie";

import styles from "styles/movie.module.scss";

export default function Movie({
  movie,
  cdn,
  keywords,
}: MovieProps): JSX.Element {
  const stringKeywordds = keywords.flatMap((g) => g.name).join(",");
  return (
    <>
      <Head>
        <title>{movie.title}</title>

        <meta name="description" content={movie.overview} />
        <meta name="keywords" content={stringKeywordds} />

        <meta property="og:image" content={cdn + "/w500" + movie.poster_path} />
        <meta
          property="og:image"
          content={cdn + "/w780" + movie.backdrop_path}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={movie.title} />
        <meta property="og:description" content={movie.overview} />
        <meta property="og:site_name" content={movie.title} />

        <meta
          property="twitter:image"
          content={cdn + "/w500" + movie.backdrop_path}
        />
        <meta property="twitter:image:width" content="780" />
        <meta property="twitter:image:height" content="439" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content={movie.title} />
        <meta property="twitter:title" content={movie.title} />
        <meta property="twitter:description" content={movie.overview} />
      </Head>

      <div
        className={styles.background}
        style={{
          height: "100vh",
          backgroundImage: `url(${
            cdn + "/w1920_and_h800_multi_faces" + movie.backdrop_path
          })`,
        }}
      />
      <div className={styles.blur} />
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src={cdn + "/w300" + movie.poster_path}
            className={styles.poster}
          />
          <div className={styles.details}>
            <h1>
              {movie.title} <span>(2021)</span>
            </h1>
            <p>
              07-07-2021 (PT) Ação, Aventura, Thriller, Ficção científica 2h 13m
            </p>
            <div className={styles.rating}>
              <div className={styles.percent}>
                <CircularProgressbar
                  value={movie.vote_average * 10}
                  text={movie.vote_average.toFixed(1)}
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
              <span className={styles.text}>
                Classificação Geral dos Utilizadores
              </span>
            </div>
            <h3>Sinopse</h3>
            <p>{movie.overview}</p>
          </div>
        </div>

        {/* <div className={styles.seriesCast}>People</div> */}
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const id = context.params?.id;

  if (id) {
    try {
      const movie = await getDetailsMovie(id);
      const keywords = await getKeywords(id);
      return {
        props: {
          movie: movie.data,
          keywords: keywords.data.keywords,
          cdn: process.env.NEXTJS_CDN,
        },
        revalidate: 3600,
      };
    } catch (error) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};
