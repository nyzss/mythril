import { FetchOptions, fetch } from "@tauri-apps/api/http";
import { TManga } from "../types/manga";
import { createFetchUrl, createSingleFetchUrl } from "./helper";
import { TChapter } from "../types/chapter";
import { Config } from "../types/types";

const apiUrl = "https://api.mangadex.org";
const userAgent = { "User-Agent": "Mythril / 0.1" };

const defaultConfig: Config = {
  limit: 10,
  offset: 0,
  contentRating: [],
  includes: [],
};

const fetchConfig: FetchOptions = {
  method: "GET",
  timeout: 30,
  headers: userAgent,
};

const fetchMangas = async (): Promise<TManga[]> => {
  const baseUrl = `${apiUrl}/manga`;
  const config: Config = {
    ...defaultConfig,
    includes: ["cover_art", "artist", "author"],
    contentRating: ["safe"],
  };

  const fetchUrl = createFetchUrl(baseUrl, config);

  return await fetch(fetchUrl, fetchConfig)
    .then((res: any) => res.data.data)
    .then((res: TManga[]) => {
      console.log(res);
      return res;
    });
};

const fetchSingleManga = async (mangaId: string) => {
  const baseUrl = `${apiUrl}/manga/${mangaId}`;

  const fetchUrl = createSingleFetchUrl(baseUrl, {
    includes: ["cover_art", "artist", "author", "creator"],
  });

  return await fetch(fetchUrl, fetchConfig)
    .then((res: any) => res.data.data)
    .then((res: TManga) => {
      console.log(res);
      return res;
    });
};

const fetchChapters = async (mangaId: string): Promise<TChapter[]> => {
  const baseUrl = `${apiUrl}/manga/${mangaId}/feed`;

  return await fetch(baseUrl, {
    method: "GET",
    timeout: 30,
    headers: userAgent,
  })
    .then((res: any) => res.data.data)
    .then((res: TChapter[]) => {
      console.log(res);
      return res;
    });
};

export { fetchMangas, fetchChapters, fetchSingleManga };
