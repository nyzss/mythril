import { useParams } from "react-router-dom";
import SingleManga from "../components/Manga/SingleManga";
import { useSingleManga } from "../utils/queries";

const Manga = () => {
  const { mangaId } = useParams();
  if (!mangaId) return <>Couldn't find what you're looking for.</>;
  const { data: mangas, isLoading } = useSingleManga(mangaId);

  if (isLoading) return <>Loading...</>;

  return (
    <>
      <SingleManga manga={mangas!} />
    </>
  );
};

export default Manga;
