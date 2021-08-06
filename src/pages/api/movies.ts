import type { NextApiRequest, NextApiResponse } from "next";
import { getPopularMovies } from "services/movies";

type Data = {
  name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { data } = await getPopularMovies();
  res.status(200).json(data);
};
