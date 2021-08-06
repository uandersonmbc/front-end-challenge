import axios from "./api";

const path = "/movie";

export function getMovies() {
  return axios.get(path, {
    params: {
      api_key: process.env.NEX_API_KEY,
    },
  });
}

export function getPopularMovies() {
  return axios.get(`${path}/popular`, {
    params: {
      api_key: process.env.NEXTJS_API_KEY,
    },
  });
}

export function getMovie(id: number) {
  return axios.get(`${path}/${id}`);
}
