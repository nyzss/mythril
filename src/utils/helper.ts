import { Group, RelationshipType, TManga } from "../types/manga";
import { Config, CoverResolution } from "../types/types";

// export const RUNNING_IN_TAURI = window.__TAURI__ !== undefined;
export const RUNNING_IN_TAURI = "__TAURI_METADATA__" in window;

export const createFetchUrl = (config: Config) => {
  const { url, limit, offset, contentRating, includes, order } = config;

  const includesValue = includes
    ? `&includes[]=${includes.join("&includes[]=")}`
    : "";

  const contentRatingValue = contentRating
    ? `&contentRating[]=${contentRating.join("&contentRating[]=")}`
    : "";

  const orderValue = (): string => {
    if (!order) return "";

    const orderList: string[] = [];

    for (const [orderBy, value] of Object.entries(order)) {
      const v = `&order[${orderBy}]=${value}`;
      orderList.push(v);
    }
    return orderList.join();
  };

  const limitValue = limit ? `&limit=${limit}` : "";
  const offsetValue = offset ? `&offset=${offset}` : "";

  const fetchUrl = `${url}?${includesValue}${contentRatingValue}${limitValue}${offsetValue}${orderValue()}`;

  return fetchUrl;
};

export const relationFilter = (
  manga: TManga
  // filter: Group | RelationshipType
) => {
  const tags = manga.attributes.tags;
  const relations = manga.relationships;
  // const genres = relationFilter(tags, "genre");

  const filterTag = (type: Group) =>
    tags.filter((tag) => tag.attributes.group === type);
  const filterRelations = (type: RelationshipType) =>
    relations.filter((rel) => rel.type === type);

  const themes = filterTag("theme");
  const formats = filterTag("format");
  const contents = filterTag("content");

  const artist = filterRelations("artist");
  const author = filterRelations("author");

  const genres = filterTag("genre");
  return {
    genres,
    themes,
    formats,
    contents,
    artist,
    author,
  };
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

export const getFlag = (countryCode: string) => {
  if (countryCode.length !== 2) return;
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => {
      return 127397 + char.codePointAt(0)!;
    });

  const code = String.fromCodePoint(...codePoints);
  // console.log(code, codePoints);

  return code;
};
