import axios from "./api";

const path = "/movie";
const mainLanguage = "pt-BR";

export function getPopularMovies(language: string = mainLanguage) {
  return axios.get(`${path}/popular`, {
    params: {
      api_key: process.env.NEXTJS_API_KEY,
      language: language,
    },
  });
}

export function getDetailsMovie(
  id: string | string[] | undefined,
  language: string = mainLanguage
) {
  return axios.get(`${path}/${id}`, {
    params: {
      api_key: process.env.NEXTJS_API_KEY,
      language: language,
    },
  });
}

export function getKeywords(
  id: string | string[],
  language: string = mainLanguage
) {
  return axios.get(`${path}/${id}/keywords`, {
    params: {
      api_key: process.env.NEXTJS_API_KEY,
      language: language,
    },
  });
}
