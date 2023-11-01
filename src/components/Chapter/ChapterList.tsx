import { useAtomValue } from "jotai";
import { useChapters } from "../../utils/queries";
import { userPreferencesAtom } from "../../utils/atoms";
import ChapterItems from "./ChapterItems";

const ChapterList = ({ mangaId }: { mangaId: string }) => {
  const { data: chapters, isLoading } = useChapters({
    id: mangaId,
    includes: ["scanlation_group", "user"],
  });

  const { preferredLanguage } = useAtomValue(userPreferencesAtom);

  // skeleton in case its loading
  if (isLoading)
    return (
      <div className="flex flex-col gap-3">
        {[...Array(8).keys()].map((i) => (
          <div
            key={i}
            className="flex flex-row justify-between p-7 bg-neutral-300/60 dark:bg-neutral-800 rounded-md items-center hover:bg-rose-400/20 dark:hover:bg-rose-400/20 animate-pulse"
          >
            <div className="h-2.5 bg-neutral-400 rounded-full dark:bg-neutral-700 w-32"></div>
            <div className="h-2.5 bg-neutral-400 rounded-full dark:bg-neutral-600 w-24"></div>
            <div className="h-2.5 bg-neutral-500 rounded-full dark:bg-neutral-600 w-48"></div>
          </div>
        ))}
      </div>
    );

  const filteredChapters = preferredLanguage
    ? chapters?.filter(
        (chap) => chap.attributes.translatedLanguage === preferredLanguage
      )
    : chapters;

  return (
    <div className="w-full h-full">
      chapters
      <div className="flex flex-col gap-3">
        {filteredChapters?.map((chap) => (
          <ChapterItems key={chap.id} chapter={chap} />
        ))}
      </div>
    </div>
  );
};

export default ChapterList;
