import type { NextApiRequest, NextApiResponse } from "next";
import { getGenres } from "services/genres";

type Data = {
  name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data | {}>) => {
  try {
    const query = req.query;
    const locale = query.locale?.toString() || process.env.NEXTJS_LOCALE;
    const { data } = await getGenres(locale);

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({});
  }
};
