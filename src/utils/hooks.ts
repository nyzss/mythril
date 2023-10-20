import { useQuery } from "@tanstack/react-query";
import { fetchMangas } from "./api";

const useMangas = () => {
  return useQuery({
    queryKey: ["mangas"],
    queryFn: fetchMangas,
  });
};

export { useMangas };
