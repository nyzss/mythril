import MangaCard from "../components/Manga/MangaCard";
import { useMangas } from "../utils/hooks";

const Library = () => {
  const { data: mangas, isLoading } = useMangas();

  if (isLoading)
    return <h1 className="text-4xl font-bold text-indigo-800">Loading...</h1>;

  return (
    <div className="mx-auto my-12 grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      {mangas!.map((manga) => (
        <MangaCard manga={manga} key={manga.id} />
      ))}
    </div>
  );
};

export default Library;
