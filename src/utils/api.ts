import { FetchOptions, fetch as fetchTauri } from "@tauri-apps/api/http";
import { TManga } from "../types/manga";
import { RUNNING_IN_TAURI, createFetchUrl } from "./helper";
import { TChapter } from "../types/chapter";
import { Config } from "../types/types";
import { ChapterImages } from "../types/chapterImages";

export const proxyUrl = "https://api.nascent.dev";
const baseApi = "https://api.mangadex.org";

const apiUrl = RUNNING_IN_TAURI ? baseApi : `${proxyUrl}/${baseApi}`;

const userAgent = { "User-Agent": "Mythril / 0.1" };

export const defaultConfig: Config = {
  url: apiUrl,
  limit: 50,
  offset: 0,
  contentRating: [],
  includes: [],
};

const fetchConfig: FetchOptions = {
  method: "GET",
  timeout: 30,
  headers: userAgent,
};

export const fetchMangas = async (): Promise<TManga[]> => {
  const baseUrl = `${apiUrl}/manga`;
  const config: Config = {
    ...defaultConfig,
    includes: ["cover_art", "artist", "author"],
    contentRating: ["safe"],
    url: baseUrl,
  };

  const fetchUrl = createFetchUrl(config);

  // console.log("fetchMangas called");

  if (RUNNING_IN_TAURI)
    return await fetchTauri(fetchUrl, fetchConfig)
      .then((res: any) => {
        console.log(res);
        return res.data.data;
      })
      .then((res: TManga[]) => {
        console.log(res);
        return res;
      });

  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data: TManga[] = await json.data;
  return data;
};

export const fetchSingleManga = async (mangaId: string) => {
  const baseUrl = `${apiUrl}/manga/${mangaId}`;

  console.log("fetchSingleManga called");

  const fetchUrl = createFetchUrl({
    url: baseUrl,
    includes: ["cover_art", "artist", "author", "creator"],
  });

  if (RUNNING_IN_TAURI)
    return await fetchTauri(fetchUrl, fetchConfig)
      .then((res: any) => res.data.data)
      .then((res: TManga) => {
        console.log(res);
        return res;
      });

  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data: TManga = await json.data;
  return data;
};

export const fetchChapters = async (options: Config): Promise<TChapter[]> => {
  const baseUrl = `${apiUrl}/manga/${options.id}/feed`;

  const fetchUrl = createFetchUrl({
    ...options,
    url: baseUrl,
    order: {
      chapter: "asc",
    },
  });

  if (RUNNING_IN_TAURI)
    return await fetchTauri(fetchUrl, fetchConfig)
      .then((res: any) => res.data.data)
      .then((res: TChapter[]) => {
        console.log(res);
        return res;
      });

  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data: TChapter[] = await json.data;
  console.log(data);
  return data;
};

export const fetchSingleChapter = async (
  chapterId: string
): Promise<TChapter> => {
  const baseUrl = `${apiUrl}/chapter/${chapterId}`;
  const fetchUrl = createFetchUrl({ url: baseUrl, includes: ["manga"] });

  if (RUNNING_IN_TAURI)
    return await fetchTauri(fetchUrl, fetchConfig)
      .then((res: any) => res.data)
      .then((res: TChapter) => res);

  const response = await fetch(fetchUrl);
  const json = await response.json();
  const data: TChapter = await json.data;
  console.log(data);
  return data;
};

export const fetchChapterImages = async (
  chapterId: string
): Promise<ChapterImages> => {
  const fetchUrl = `${apiUrl}/at-home/server/${chapterId}`;

  if (RUNNING_IN_TAURI)
    return await fetchTauri(fetchUrl, fetchConfig)
      .then((res: any) => res.data)
      .then((res: ChapterImages) => {
        console.log(res);
        return res;
      });

  const response = await fetch(fetchUrl);
  const data = await response.json();
  // console.log("HERE: Chapter Images", data);
  return data;
};
