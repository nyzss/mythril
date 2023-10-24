import { useParams } from "react-router-dom";
import { useSingleManga } from "../utils/queries";
import { createCoverUrl } from "../utils/helper";
import MangaRelations from "../components/Manga/MangaRelations";

const Manga = () => {
  const { mangaId } = useParams();
  if (!mangaId) return <>Couldn't find what you're looking for.</>;

  const { data: manga, isLoading } = useSingleManga(mangaId);
  if (!manga) return <>Error!</>;

  const coverUrl = createCoverUrl(manga, "medium");

  if (isLoading) return <>Loading...</>;

  // do a function to have a prioritized title
  const title = manga.attributes.title.en;

  return (
    <div className="flex w-full h-full flex-col 2xl:flex-row gap-6 p-8">
      {/* first container */}
      <div className="flex flex-col w-full h-full dark:bg-secondarydark rounded-md p-4">
        <div className="flex flex-row gap-6">
          {/* img here */}
          <div className="flex overflow-hidden w-72 shrink-0">
            <img
              src={coverUrl}
              alt={title}
              className="rounded-md shrink-0 object-cover w-full h-full"
            />
          </div>

          {/* title */}
          <div className="flex flex-col">
            <h1 className="pt-2 text-2xl font-bold dark:text-mandy-400">
              {title}
            </h1>
            <MangaRelations manga={manga} />
          </div>
        </div>
        <h1>another hello</h1>
        <h1>yet another hello</h1>
      </div>
      {/* second container  */}
      <div className="w-full h-full dark:bg-secondarydark rounded-md"></div>
    </div>
  );
};

export default Manga;
