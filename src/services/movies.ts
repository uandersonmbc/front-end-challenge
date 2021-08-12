import axios from "./api";

const path = "/movie";
const mainLanguage = process.env.NEXTJS_LOCALE?.toString() || "en-US";

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

export function getKeywordsMovie(
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

export function getSimilarMovies(
  id: string | string[],
  language: string = mainLanguage
) {
  return axios.get(`${path}/${id}/similar`, {
    params: {
      api_key: process.env.NEXTJS_API_KEY,
      language: language,
    },
  });
}

export function getRecomendationsMovie(
  id: string | string[],
  language: string = mainLanguage
) {
  return axios.get(`${path}/${id}/recommendations`, {
    params: {
      api_key: process.env.NEXTJS_API_KEY,
      language: language,
    },
  });
}

export function getCreditsMovie(
  id: string | string[],
  language: string = mainLanguage
) {
  return axios.get(`${path}/${id}/credits`, {
    params: {
      api_key: process.env.NEXTJS_API_KEY,
      language: language,
    },
  });
}

export function getImagesMovie(id: string | string[]) {
  return axios.get(`${path}/${id}/images`, {
    params: {
      api_key: process.env.NEXTJS_API_KEY,
    },
  });
}

export function getVideosMovie(
  id: string | string[],
  language: string = mainLanguage
) {
  return axios.get(`${path}/${id}/videos`, {
    params: {
      api_key: process.env.NEXTJS_API_KEY,
      language: language,
    },
  });
}
