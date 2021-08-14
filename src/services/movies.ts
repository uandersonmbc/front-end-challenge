import axios from "./api";

const path = "/movie";
const defaultLocale = process.env.NEXTJS_LOCALE?.toString() || "en-US";

export function getDiscovers(language: string = defaultLocale, params: any) {
  return axios.get(`/discover/movie`, {
    params: {
      ...params,
      api_key: process.env.NEXTJS_API_KEY,
      locale: language,
    },
  });
}

export function getPopularMovies(
  language: string = defaultLocale,
  page: string | string[] | undefined
) {
  return axios.get(`${path}/popular`, {
    params: {
      api_key: process.env.NEXTJS_API_KEY,
      language: language,
      page: page,
    },
  });
}

export function getDetailsMovie(
  id: string | string[] | undefined,
  language: string = defaultLocale
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
  language: string = defaultLocale
) {
  return axios.get(`${path}/${id}/keywords`, {
    params: {
      api_key: process.env.NEXTJS_API_KEY,
      language: language,
    },
  });
}

export function getRecomendationsMovie(
  id: string | string[],
  language: string = defaultLocale
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
  language: string = defaultLocale
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
  language: string = defaultLocale
) {
  return axios.get(`${path}/${id}/videos`, {
    params: {
      api_key: process.env.NEXTJS_API_KEY,
      language: language,
    },
  });
}
