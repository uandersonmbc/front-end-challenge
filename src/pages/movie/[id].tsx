import Head from "next/head";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";

import { getKeywords, getDetailsMovie } from "services/movies";
import { MovieProps } from "types/movie";
import styles from "styles/movie.module.scss";
import { formatDates, convertMinToHrMn } from "utils/helpers";

export default function Movie({
  movie,
  cdn,
  keywords,
}: MovieProps): JSX.Element {
  const stringKeywordds = keywords.flatMap((g) => g.name).join(",");
  const genres = movie.genres.map((g) => g.name).join(",");
  const year = movie.release_date.split("-")[0];
  const runtime = convertMinToHrMn(movie.runtime);
  const releaseDate = formatDates(
    new Date(movie.release_date),
    movie.original_language
  );
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
        <div className={styles.content}>
          <div className={styles.header}>
            <img
              src={cdn + "/w300" + movie.poster_path}
              className={styles.poster}
            />
            <div className={styles.details}>
              <h1>
                {movie.title} <span>({year})</span>
              </h1>
              <p>
                {releaseDate} - {genres} - {runtime}
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

          <div className={styles.seriesCast}>
            <h3>Elenco</h3>
          </div>
        </div>
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

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const param = params?.id?.toString();
  const [id, language] = param ? param?.split("=") : [undefined, undefined];
  if (id) {
    try {
      const movie = await getDetailsMovie(id, language);
      const keywords = await getKeywords(id, language);
      console.log("Movie", movie);
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
