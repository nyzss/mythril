import { fetch } from "@tauri-apps/api/http";
import { TManga } from "../types/manga";
import { createFetchUrl } from "./helper";

const fetchMangas = async (): Promise<TManga[]> => {
  const baseUrl = "https://api.mangadex.org/manga";
  const limit: number = 10;
  const offset: number = 0;
  const includes: string[] = ["cover_art", "artist", "author"];
  const contentRating: string[] = ["safe"];

  const fetchUrl = createFetchUrl(
    baseUrl,
    limit,
    offset,
    contentRating,
    includes
  );

  return await fetch(fetchUrl, {
    method: "GET",
    timeout: 30,
    headers: {
      "User-Agent": "Mythril / 0.1",
    },
  })
    .then((res: any) => res.data.data)
    .then((res: TManga[]) => {
      console.log(res);
      return res;
    });
};

export { fetchMangas };
