import { FetchOptions, fetch as fetchTauri } from "@tauri-apps/api/http";
import { TManga } from "../types/manga";
import { RUNNING_IN_TAURI, createFetchUrl } from "./helper";
import { TChapter } from "../types/chapter";
import { Config } from "../types/types";

const bai = "https://bai-hwge.onrender.com";
const baseApi = "https://api.mangadex.org";

const apiUrl = RUNNING_IN_TAURI ? baseApi : `${bai}/${baseApi}`;

const userAgent = { "User-Agent": "Mythril / 0.1" };

const defaultConfig: Config = {
  url: apiUrl,
  limit: 20,
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
    url: baseUrl,
  };
  console.log("fetchMangas called");

  console.log(RUNNING_IN_TAURI);

  const fetchUrl = createFetchUrl(config);

  const fetchFnTauri = await fetchTauri(fetchUrl, fetchConfig)
    .then((res: any) => {
      console.log(res);
      return res.data.data;
    })
    .then((res: TManga[]) => {
      console.log(res);
      return res;
    });

  const fetchFnBrowser = await fetch(fetchUrl)
    .then((res: any) => res.json())
    .then((res: any) => res.data)
    .then((res: TManga[]) => res);

  console.log("this func got called");

  return RUNNING_IN_TAURI ? fetchFnTauri : fetchFnBrowser;
};

const fetchSingleManga = async (mangaId: string) => {
  const baseUrl = `${apiUrl}/manga/${mangaId}`;

  console.log("fetchSingleManga called");

  const fetchUrl = createFetchUrl({
    url: baseUrl,
    includes: ["cover_art", "artist", "author", "creator"],
  });

  return await fetchTauri(fetchUrl, fetchConfig)
    .then((res: any) => res.data.data)
    .then((res: TManga) => {
      console.log(res);
      return res;
    });
};

const fetchChapters = async (mangaId: string): Promise<TChapter[]> => {
  const baseUrl = `${apiUrl}/manga/${mangaId}/feed`;

  const fetchUrl = createFetchUrl({
    url: baseUrl,
    includes: ["scanlation_group"],
  });

  console.log("fetchChapters called");

  return await fetchTauri(fetchUrl, {
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
