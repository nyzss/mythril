import { useParams } from "react-router-dom";
import SingleManga from "../components/Manga/SingleManga";
import { useMangas } from "../utils/hooks";

const Manga = () => {
  const params = useParams();
  const { data: mangas, isLoading } = useMangas();

  if (isLoading) return <>Loading...</>;

  const matchedManga = mangas?.filter(
    (manga) => manga.id === params.mangaId
  )[0];

  return (
    <div>
      <SingleManga manga={matchedManga!} />
    </div>
  );
};

export default Manga;
