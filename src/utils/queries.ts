import { QueryClient, useQuery } from "@tanstack/react-query";
import {
  fetchMangas,
  fetchChapters,
  fetchSingleManga,
  fetchChapterImages,
  fetchSingleChapter,
} from "./api";
import { TManga } from "../types/manga";
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

export const useChapters = (mangaId: string) => {
  return useQuery({
    queryKey: ["chapters", mangaId],
    queryFn: () => fetchChapters(mangaId),
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
