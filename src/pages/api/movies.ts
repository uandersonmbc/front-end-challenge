import type { NextApiRequest, NextApiResponse } from "next";
import { getPopularMovies } from "services/movies";

type Data = {
  name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data | {}>) => {
  try {
    const query = req.query;
    const language = query.language?.toString() || process.env.NEXTJS_LANGUAGE;
    const { data } = await getPopularMovies(language);

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({});
  }
};
