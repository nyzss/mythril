import MangaCard from "../components/Manga/MangaCard";
import { useMangas } from "../utils/queries";

const Library = () => {
  const { data: mangas, isLoading } = useMangas();

  if (isLoading)
    return <h1 className="text-4xl font-bold text-indigo-800">Loading...</h1>;

  return (
    <main className="flex flex-col p-8 pt-24 gap-10">
      <h1 className="text-3xl font-bold">Recently Updated</h1>
      <div className=" flex flex-row flex-wrap content-center gap-8">
        {mangas!.map((manga) => (
          <MangaCard key={manga.id} manga={manga} />
        ))}
      </div>
    </main>
  );
};

export default Library;
