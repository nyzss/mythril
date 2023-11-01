import { Link, useParams } from "react-router-dom";
import { useBrowserUrl, useChapters, useSingleManga } from "../utils/queries";
import { createCoverUrl, getFlag } from "../utils/helper";
import MangaRelations from "../components/Manga/MangaRelations";
import Button from "../components/Main/Button";
import Markdown from "react-markdown";
import LanguageList from "../components/Manga/LanguageList";
import ChapterList from "../components/Chapter/ChapterList";
import { useAtomValue } from "jotai";
import { userPreferencesAtom } from "../utils/atoms";

const Manga = () => {
  const { mangaId } = useParams();
  if (!mangaId) return <>Couldn't find what you're looking for.</>;

  const { preferredLanguage } = useAtomValue(userPreferencesAtom);

  const { data: manga, isLoading } = useSingleManga(mangaId);

  const { data: chapters } = useChapters(
    {
      id: manga?.id,
      includes: ["scanlation_group", "user"],
    },
    !!manga
  );

  const firstChapter = chapters?.filter((chap) =>
    chap.attributes.translatedLanguage === preferredLanguage
      ? preferredLanguage
      : "en"
  )[0];

  const coverUrl = manga && createCoverUrl(manga, "medium");
  const finalUrl = coverUrl && useBrowserUrl(coverUrl);

  if (isLoading) return <>Loading...</>;

  // do a function to have a prioritized title
  const title = manga?.attributes.title.en;

  const flag = manga && getFlag(manga?.attributes.originalLanguage);
  const translatedLanguage =
    manga && manga.attributes.availableTranslatedLanguages!;

  if (isLoading || !manga) return <>Loading!</>;
  return (
    <div className="flex w-full h-full flex-col 2xl:flex-row gap-6 p-8 2xl:overflow-hidden">
      {/* first container */}
      <div className="flex flex-col w-full 2xl:h-full dark:bg-secondarydark rounded-md p-6 gap-6 2xl:overflow-auto ">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* img here */}
          <div className="flex overflow-hidden w-72 shrink-0">
            <img
              src={finalUrl}
              alt={title}
              className="rounded-md shrink-0 object-cover w-full h-full"
            />
          </div>

          {/* title */}
          <div className="flex flex-col">
            <h1 className="pt-2 text-3xl font-bold dark:text-neutral-100">
              {title}{" "}
              <span role="img" aria-label="flag">
                {flag}
              </span>
              <span>{}</span>
            </h1>
            <MangaRelations manga={manga} />
          </div>
        </div>
        {/* buttons */}
        <div className="flex flex-wrap gap-4">
          <h1 className="capitalize p-2 text-neutral-700 dark:text-neutral-300">
            {manga.attributes.status}
          </h1>
          {/* maybe add some icons */}
          <Link to={"/chapter/" + firstChapter?.id}>
            <Button>Read First Chapter</Button>
          </Link>
          <Button variant="secondary" disabled>
            Add to Library
          </Button>
        </div>

        <div className="space-y-2">
          <h2 className="text-primarydark dark:text-rose-200 text-xl font-bold">
            Description
          </h2>
          <Markdown className="prose dark:prose-invert">
            {manga.attributes.description.en}
          </Markdown>
        </div>
        <h1>expand button for more info</h1>
      </div>
      {/* second container  */}
      <div className="w-full 2xl:h-full dark:bg-secondarydark rounded-md 2xl:overflow-auto px-8">
        <div className="flex gap-3 pt-6 pb-4 px-8 w-full sticky top-0 backdrop-blur-md flex-wrap flex-col lg:flex-row bg-neutral-100/10 dark:bg-neutral-900/90">
          {/* <Button>first button</Button>
          <Button>second button</Button> */}
          {translatedLanguage && <LanguageList list={translatedLanguage} />}
        </div>
        {/* <ChapterList mangaId={manga.id} /> */}
        <ChapterList mangaId={manga.id} />
      </div>
    </div>
  );
};

export default Manga;
