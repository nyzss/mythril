import { createCoverUrl } from "../../utils/helper";
import Markdown from "react-markdown";
import { TManga } from "../../types/manga";
import MangaRelations from "./MangaRelations";
import ChapterList from "./ChapterList";

const SingleManga = ({ manga }: { manga: TManga }) => {
  if (!manga) return <>Loading...</>;
  const coverRelation = manga.relationships.find(
    (el) => el.type === "cover_art"
  );

  const placeholderImg = "https://placehold.co/400x600";

  const attributes = manga.attributes;

  const coverUrl = coverRelation?.attributes?.fileName
    ? createCoverUrl({
        mangaId: manga.id,
        coverFileName: coverRelation?.attributes?.fileName,
        resolution: "original",
      })
    : placeholderImg;

  return (
    <div className="2xl:mx-auto py-8">
      <div className="h-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col 2xl:flex-row 2xl:gap-8 2xl:overflow-auto">
        {/* first container */}
        <div className="2xl:sticky top-0 h-full flex-none">
          <h1 className="text-xs text-neutral-500">{manga.id}</h1>
          <h2 className="text-3xl font-bold text-rose-500 dark:text-rose-400 mb-2">
            {attributes.title.en ? attributes.title.en : attributes.title.ja}
          </h2>
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 mt-8">
              <div className="mb-4">
                <img
                  className="rounded-md h-96 mx-auto"
                  src={coverUrl}
                  alt={manga.attributes.title.en}
                />
              </div>
            </div>
            <div className="md:flex-1 px-4 my-auto">
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {attributes.title.en
                  ? attributes.title.ja
                  : attributes.title.en}
              </p>
              <div className="flex flex-col">
                <MangaRelations manga={manga} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-xl text-rose-400 dark:text-rose-300">
              Description
            </h1>
            <Markdown className="prose dark:prose-invert">
              {manga.attributes.description.en}
            </Markdown>
          </div>
        </div>
        {/* second container */}
        <div className="max-w-7xl flex-none 2xl:mt-16">
          <ChapterList mangaId={manga.id} />
        </div>
      </div>
    </div>
  );
};

export default SingleManga;
