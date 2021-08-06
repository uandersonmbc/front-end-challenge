import { useEffect, useState } from "react";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import CardMovie from "components/CardMovie";

import axios from "services/api";

interface MovieState {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

export default function Home(): JSX.Element {
  const [movies, setMovies] = useState<Array<MovieState>>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/movies");
      setMovies(data.results);
    })();
  }, []);

  return (
    <Grid container justifyContent="center">
      {movies.map((movie) => (
        <Link
          href={{
            pathname: `/movie/${movie.id}`,
          }}
          key={movie.id}
        >
          <a>
            <Grid>
              <CardMovie
                title={movie.title}
                image={movie.poster_path}
                percent={movie.vote_average}
                releaseDate={movie.release_date}
              />
            </Grid>
          </a>
        </Link>
      ))}
    </Grid>
  );
}
