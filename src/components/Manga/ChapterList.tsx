import { useAtomValue } from "jotai";
import { useChapters } from "../../utils/queries";
import ChapterItem from "./ChapterItem";
import { userPreferencesAtom } from "../../utils/atoms";

const ChapterList = ({ mangaId }: { mangaId: string }) => {
  const { data: chapters, isLoading } = useChapters(mangaId);
  const { preferredLanguage } = useAtomValue(userPreferencesAtom);
  // true for debug
  if (isLoading) return <h1>Loading...</h1>;

  const filteredChap = chapters?.filter((chap) => {
    return chap.attributes.translatedLanguage === preferredLanguage;
  });

  const chap = preferredLanguage ? filteredChap : chapters;

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th scope="col" className="cursor-pointer">
            Index
          </th>
          <th scope="col">Name</th>
          <th scope="col">Group</th>
        </tr>
      </thead>
      <tbody>
        {chap?.map((chap) => (
          <ChapterItem key={chap.id} chapter={chap} />
        ))}
      </tbody>
    </table>
  );
};

export default ChapterList;
