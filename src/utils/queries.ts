import { useQuery } from "@tanstack/react-query";
import { fetchMangas, fetchChapters, fetchSingleManga } from "./api";

const useMangas = () => {
  return useQuery({
    queryKey: ["mangas"],
    queryFn: fetchMangas,
  });
};

const useSingleManga = (mangaId: string) => {
  return useQuery({
    queryKey: ["mangas", mangaId],
    queryFn: () => fetchSingleManga(mangaId),
  });
};

const useChapters = (mangaId: string) => {
  return useQuery({
    queryKey: ["chapters", mangaId],
    queryFn: () => fetchChapters(mangaId),
  });
};

export { useMangas, useChapters, useSingleManga };
