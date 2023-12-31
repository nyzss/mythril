import { QueryClient, useQuery } from "@tanstack/react-query";
import {
  fetchMangas,
  fetchChapters,
  fetchSingleManga,
  fetchChapterImages,
  fetchSingleChapter,
  proxyUrl,
  searchMangas,
} from "./api";
import { TManga } from "../types/manga";
import { RUNNING_IN_TAURI } from "./helper";
import { useEffect, useRef } from "react";
import { Config, MangaQueryParams } from "../types/types";
export const queryClient = new QueryClient();

export const useMangas = () => {
  return useQuery({
    queryKey: ["mangas"],
    queryFn: fetchMangas,
  });
};

export const useSingleManga = (mangaId: string) => {
  return useQuery<TManga>({
    queryKey: ["mangas", mangaId],
    queryFn: () => fetchSingleManga(mangaId),
    initialData: () => {
      const allMangas = queryClient.getQueryData(["mangas"]) as TManga[];
      const id = allMangas?.find((manga) => manga.id === mangaId);
      if (!id) return;
      return id;
    },
  });
};

export const useChapters = (options: Config, enabled: boolean = true) => {
  return useQuery({
    queryKey: ["chapters", options.id],
    queryFn: () => fetchChapters(options),
    enabled,
  });
};

export const useChapter = (chapterId: string) => {
  return useQuery({
    queryKey: ["chapter", chapterId],
    queryFn: () => fetchSingleChapter(chapterId),
  });
};

export const useChapterImages = (chapterId: string) => {
  return useQuery({
    queryKey: ["chapterImg", chapterId],
    queryFn: () => fetchChapterImages(chapterId),
  });
};

export const useSearchMangas = (options: MangaQueryParams) => {
  return useQuery({
    queryKey: ["searchMangas"],
    queryFn: () => searchMangas(options),
  });
};

export const useBrowserUrl = (url: string) => {
  return RUNNING_IN_TAURI ? url : `${proxyUrl}/${url}`;
};

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};
