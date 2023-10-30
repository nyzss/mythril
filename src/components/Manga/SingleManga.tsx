import { RUNNING_IN_TAURI, createCoverUrl } from "../../utils/helper";
import Markdown from "react-markdown";
import { TManga } from "../../types/manga";
import MangaRelations from "./MangaRelations";
import ChapterList from "./ChapterList";
import { proxyUrl } from "../../utils/api";

const SingleManga = ({ manga }: { manga: TManga }) => {
  if (!manga) return <>Loading...</>;

  const attributes = manga.attributes;

  const coverUrl = createCoverUrl(manga, "original");
  const baseApi = RUNNING_IN_TAURI ? "" : proxyUrl;
  const finalUrl = `${baseApi}/${coverUrl}`;

  return (
    <div className="py-8">
      <div className="h-full px-8 flex flex-col 2xl:flex-row 2xl:gap-8 2xl:overflow-auto space-y-4">
        {/* first container */}
        <div className="2xl:sticky 2xl:top-0 2xl:h-full flex-none space-y-3">
          <h1 className="text-xs text-neutral-500">{manga.id}</h1>
          <h2 className="text-3xl font-bold text-rose-500 dark:text-rose-400 mb-2">
            {attributes.title.en ? attributes.title.en : attributes.title.ja}
          </h2>
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 mt-8">
              <div className="mb-4">
                <img
                  className="rounded-md h-96 mx-auto"
                  src={finalUrl}
                  alt={manga.attributes.title.en}
                />
              </div>
            </div>
            <div className="md:flex-1 px-4 flex flex-col">
              <MangaRelations manga={manga} />
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
        <div className="flex-none 2xl:mt-16">
          <ChapterList mangaId={manga.id} />
        </div>
      </div>
    </div>
  );
};

export default SingleManga;
