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
    const language = query.language?.toString() || process.env.NEXTJS_LANGUAGE;
    const id = query.id?.toString() || "";
    const videos = await getVideosMovie(id, language);
    const images = await getImagesMovie(id);
    const credits = await getCreditsMovie(id, language);
    const recommendations = await getRecomendationsMovie(id, language);

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
