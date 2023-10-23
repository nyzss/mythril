import { Group, Relationship, RelationshipType, Tag } from "../types/manga";
import { Config, CoverResolution } from "../types/types";

// export const RUNNING_IN_TAURI = window.__TAURI__ !== undefined;
export const RUNNING_IN_TAURI = "__TAURI_METADATA__" in window;

export const createFetchUrl = (config: Config) => {
  const { url, limit, offset, contentRating, includes } = config;

  const includesValue = includes
    ? `&includes[]=${includes.join("&includes[]=")}`
    : "";

  const contentRatingValue = contentRating
    ? `&contentRating[]=${contentRating.join("&contentRating[]=")}`
    : "";

  const limitValue = limit ? `&limit=${limit}` : "";
  const offsetValue = offset ? `&offset=${offset}` : "";

  const fetchUrl = `${url}?${includesValue}${contentRatingValue}${limitValue}${offsetValue}`;

  return fetchUrl;
};

export const createCoverUrl = ({
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

export const relationFilter = (
  relation: Tag[] | Relationship[],
  filter: Group | RelationshipType
) => {
  if (tagCheck(relation))
    return relation.filter((el) => el.attributes.group === filter);

  return relation.filter((rel) => rel.type === filter);
};

export const tagCheck = (
  relation: Tag[] | Relationship[]
): relation is Tag[] => {
  return relation.some((rel) => rel.type === "tag");
};
