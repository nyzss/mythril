import { useChapters } from "../../utils/hooks";
import ChapterItem from "./ChapterItem";

const ChapterList = ({ mangaId }: { mangaId: string }) => {
  const { data: chapters, isLoading } = useChapters(mangaId);
  if (isLoading) return <>Loading</>;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-950/80 dark:text-gray-200">
          <tr>
            <th scope="col" className="px-6 py-3">
              Index
            </th>
            <th scope="col" className="px-6 py-3">
              Chapter Title
            </th>
            <th scope="col" className="px-6 py-3">
              Scan Group
            </th>
          </tr>
        </thead>
        <tbody>
          {chapters
            ?.sort(
              (a, b) =>
                Number(a.attributes.chapter) - Number(b.attributes.chapter)
            )
            .map((chapter) => (
              <ChapterItem chapter={chapter} key={chapter.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChapterList;
