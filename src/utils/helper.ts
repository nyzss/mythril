import { Group, Relationship, RelationshipType, Tag } from "../types/manga";
import { Config, CoverResolution } from "../types/types";

const createFetchUrl = (baseUrl: string, config: Config): string => {
  const { limit, offset, includes, contentRating } = config;

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

const createSingleFetchUrl = (baseUrl: string, config: Config) => {
  const { includes } = config;

  const includesStr = includes
    ? `&includes[]=${includes.join("&includes[]=")}`
    : "";

  return `${baseUrl}?${includesStr}`;
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

const relationFilter = (
  relation: Tag[] | Relationship[],
  filter: Group | RelationshipType
) => {
  if (tagCheck(relation))
    return relation.filter((el) => el.attributes.group === filter);

  return relation.filter((rel) => rel.type === filter);
};

const tagCheck = (relation: Tag[] | Relationship[]): relation is Tag[] => {
  return relation.some((rel) => rel.type === "tag");
};

export {
  createFetchUrl,
  createCoverUrl,
  tagCheck,
  relationFilter,
  createSingleFetchUrl,
};
