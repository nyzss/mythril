import { useChapters } from "../../utils/queries";
import ChapterItem from "./ChapterItem";

const ChapterList = ({ mangaId }: { mangaId: string }) => {
  const { data: chapters, isLoading } = useChapters(mangaId);

  if (isLoading) return <h1>Loading...</h1>;

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
        {chapters?.map((chap) => (
          <ChapterItem key={chap.id} chapter={chap} />
        ))}
      </tbody>
    </table>
  );
};

export default ChapterList;
