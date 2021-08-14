import type { NextApiRequest, NextApiResponse } from "next";
import { getPopularMovies, getDiscovers } from "services/movies";

type Data = {
  name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data | {}>) => {
  try {
    const query = req.query;
    const genres = query.genres || [];
    const locale = query.locale?.toString() || process.env.NEXTJS_LOCALE;

    if (genres.length) {
      console.log("com");
      const { data } = await getDiscovers(locale, { with_genres: genres });
      res.status(200).json(data);
    } else {
      console.log("sem");
      const { data } = await getPopularMovies(locale);
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(400).json({});
  }
};
