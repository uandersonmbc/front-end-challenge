import type { NextApiRequest, NextApiResponse } from "next";
import { getPopularMovies } from "services/movies";

type Data = {
  name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data | {}>) => {
  try {
    const query = req.query;
    const locale = query.locale?.toString() || process.env.NEXTJS_LOCALE;
    const { data } = await getPopularMovies(locale);

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({});
  }
};
