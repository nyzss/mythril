import {
  Group,
  Relationship,
  RelationshipType,
  TManga,
  Tag,
} from "../types/manga";
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

export const createCoverUrl = (
  manga: TManga,
  resolution: CoverResolution
): string => {
  const placeholderImg = "/placeholder.jpg";

  const coverRelation = manga.relationships.find(
    (rel) => rel.type === "cover_art"
  );
  // returns placeholder image if there is no cover or coverAttribute is not found.
  if (!coverRelation || !coverRelation.attributes?.fileName)
    return placeholderImg;

  const baseCoverUrl = "https://uploads.mangadex.org/covers";

  const coverRes =
    resolution === "original"
      ? ""
      : `.${resolution === "medium" ? "512" : "256"}.jpg`;

  const coverUrl = `${baseCoverUrl}/${manga.id}/${coverRelation.attributes?.fileName}${coverRes}`;

  return coverUrl;
};
