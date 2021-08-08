import axios from "./api";

const path = "/movie";

export function getPopularMovies() {
  return axios.get(`${path}/popular`, {
    params: {
      api_key: process.env.NEXTJS_API_KEY,
      language: "pt-BR",
    },
  });
}

export function getDetailsMovie(id: string | string[] | undefined) {
  return axios.get(`${path}/${id}`, {
    params: {
      api_key: process.env.NEXTJS_API_KEY,
      language: "pt-BR",
    },
  });
}

export function getKeywords(id: string | string[]) {
  return axios.get(`${path}/${id}/keywords`, {
    params: {
      api_key: process.env.NEXTJS_API_KEY,
      language: "pt-BR",
    },
  });
}
