import { CoverResolution } from "../types/types";

const createFetchUrl = (
  baseUrl: string,
  limit: number = 10,
  offset: number = 0,
  contentRating?: string[],
  includes?: string[]
): string => {
  const includesStr = includes
    ? `&includes[]=${includes.join("&includes[]=")}`
    : "";

  const contentRatingStr = contentRating
    ? `&contentRating[]=${contentRating.join("&contentRating[]=")}`
    : "";

  const fetchUrl = `${baseUrl}?limit=${limit}&offset=${offset}${includesStr}${contentRatingStr}`;

  console.log(fetchUrl);

  return fetchUrl;
};

const createCoverUrl = ({
  mangaId,
  coverFileName,
  resolution = "original",
}: {
  mangaId: string;
  coverFileName: string;
  resolution: CoverResolution;
}): string => {
  const baseUrl = "https://uploads.mangadex.org/covers";

  //check if the resolution is original, if not then it matches it to medium (512) or low (256) respectively.
  const coverRes =
    resolution === "original"
      ? ""
      : `.${resolution === "medium" ? "512" : "256"}.jpg`;

  const coverUrl = `${baseUrl}/${mangaId}/${coverFileName}${coverRes}`;

  return coverUrl;
};

export { createFetchUrl, createCoverUrl };
