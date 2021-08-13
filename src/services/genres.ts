import axios from "./api";

const path = "/genre";
const defaultLocale = process.env.NEXTJS_LOCALE?.toString() || "en-US";

export function getGenres(locale: string = defaultLocale) {
  return axios.get(`${path}/movie/list`, {
    params: {
      api_key: process.env.NEXTJS_API_KEY,
      language: locale,
    },
  });
}
