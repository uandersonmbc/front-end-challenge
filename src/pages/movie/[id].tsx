import Head from "next/head";

import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";

import { getMovie } from "services/movies";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: Array<{ id: number; name: string }>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<ProductionCompany>;
  production_countries: Array<ProductionCountry>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<SpokenLanguage>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface MovieProps {
  movie: Movie;
  cdn: string;
}

export default function Movie({ movie, cdn }: MovieProps): JSX.Element {
  const keywords = movie.genres.flatMap((g) => g.name).join(",");
  return (
    <>
      <Head>
        <title>{movie.title}</title>

        <meta name="description" content={movie.overview} />
        <meta name="keywords" content={keywords} />

        <meta property="og:image" content={cdn + "/w500" + movie.poster_path} />
        <meta
          property="og:image"
          content={cdn + "/w780" + movie.backdrop_path}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={movie.title} />
        <meta property="og:description" content={movie.overview} />
        <meta property="og:site_name" content={movie.title} />

        <meta property="twitter:image" content={movie.backdrop_path} />
        <meta property="twitter:image:width" content="780" />
        <meta property="twitter:image:height" content="439" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content={movie.title} />
        <meta property="twitter:title" content={movie.title} />
        <meta property="twitter:description" content={movie.overview} />
      </Head>
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${
            cdn + "/w1920_and_h800_multi_faces" + movie.backdrop_path
          })`,
        }}
      >
        <h1>Movie {movie.title}</h1>
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
      const { data } = await getMovie(id);
      return {
        props: {
          movie: data,
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
