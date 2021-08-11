import Head from "next/head";
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import YouTube from "react-youtube";

import { getKeywordsMovie, getDetailsMovie } from "services/movies";
import axios from "services/api";
import { MovieProps, Video, Person, Movie as MovieState } from "types/movie";
import styles from "styles/movie.module.scss";
import { formatDates, convertMinToHrMn } from "utils/helpers";
import { CardPerson, CardRecommendation } from "components";

export default function Movie({
  movie,
  cdn,
  keywords,
  language,
}: MovieProps): JSX.Element {
  const [videos, setVideos] = useState<Array<Video>>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video>();
  const [cast, setCast] = useState<Array<Person>>([]);
  const [recommendations, setRecommendations] = useState<Array<MovieState>>([]);

  const stringKeywordds = keywords.flatMap((g) => g.name).join(",");
  const genres = movie.genres.map((g) => g.name).join(", ");
  const year = movie.release_date.split("-")[0];
  const runtime = convertMinToHrMn(movie.runtime);
  const releaseDate = formatDates(
    new Date(movie.release_date),
    movie.original_language
  );

  async function getDetails() {
    try {
      const { data } = await axios.get("/api/details", {
        params: {
          id: movie.id,
          language: language,
        },
      });
      setCast(data.credits.cast);
      setVideos(data.videos);
      setRecommendations(data.recommendations);
    } catch (error) {}
  }

  function onVideoClick(video: Video) {
    setSelectedVideo(video);
  }

  useEffect(() => {
    getDetails();
  }, []);

  useEffect(() => {
    videos.length && setSelectedVideo(videos[0]);
  }, [videos]);

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
              <p className={styles.infos}>
                {releaseDate} • {genres} • {runtime}
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
                      backgroundColor: "#081c22",
                      textColor: "#fff",
                      pathColor: movie.vote_average > 7 ? "#20c574" : "#d0d331",
                      trailColor: "transparent",
                    })}
                  />
                </div>
                <span className={styles.averageText}>
                  Classificação Geral dos Utilizadores
                </span>
              </div>
              <h3>Sinopse</h3>
              <p>{movie.overview}</p>
            </div>
          </div>

          <div className={styles.seriesCast}>
            <h2>Elenco</h2>
            <div className={styles.cast}>
              {cast.map((person) => (
                <CardPerson key={person.id} data={person} cdn={cdn} />
              ))}
            </div>
          </div>

          <div className={styles.videos}>
            <h2>Videos • {selectedVideo?.name}</h2>
            <div>
              <YouTube videoId={selectedVideo?.key} opts={{ width: "100%" }} />
              <div className={styles.video}>
                {videos.map((video) => (
                  <div key={video.id} onClick={() => onVideoClick(video)}>
                    {video.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.recommendations}>
            <h2>Recomendações</h2>

            <div className={styles.scrool}>
              {recommendations.map((recomendation) => (
                <CardRecommendation
                  key={recomendation.id}
                  data={recomendation}
                  cdn={cdn}
                />
              ))}
            </div>
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
  const [id, language = ""] = param?.split("=") || ["", ""];
  console.log(id, language);
  if (id) {
    try {
      const movie = await getDetailsMovie(id, language);
      const keywords = await getKeywordsMovie(id, language);
      return {
        props: {
          movie: movie.data,
          keywords: keywords.data.keywords,
          cdn: process.env.NEXTJS_CDN,
          language: language,
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
