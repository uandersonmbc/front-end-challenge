import type { NextApiRequest, NextApiResponse } from "next";
import {
  getCreditsMovie,
  getImagesMovie,
  getRecomendationsMovie,
  getVideosMovie,
} from "services/movies";

type Data = {
  videos: any;
  images: any;
  credits: any;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data | {}>) => {
  try {
    const query = req.query;
    const locate = query.locate?.toString() || process.env.NEXTJS_LOCALE;
    const id = query.id?.toString() || "";
    const videos = await getVideosMovie(id, locate);
    const images = await getImagesMovie(id);
    const credits = await getCreditsMovie(id, locate);
    const recommendations = await getRecomendationsMovie(id, locate);

    res.status(200).json({
      videos: videos.data.results,
      images: images.data,
      credits: credits.data,
      recommendations: recommendations.data.results,
    });
  } catch (error) {
    res.status(400).json({});
  }
};
