import MangaCard from "../components/Manga/MangaCard";
import { useMangas } from "../utils/queries";

const Library = () => {
  const { data: mangas, isLoading } = useMangas();

  if (isLoading)
    return <h1 className="text-4xl font-bold text-indigo-800">Loading...</h1>;

  return (
    <div className="my-12 flex flex-row flex-wrap gap-8 basis-2/3 content-start mx-auto">
      {mangas!.map((manga) => (
        <MangaCard key={manga.id} manga={manga} />
      ))}
    </div>
  );
};

export default Library;
