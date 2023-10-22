import { TChapter } from "../../types/chapter";

const ChapterItem = ({ chapter }: { chapter: TChapter }) => {
  const title = chapter.attributes.title;
  const index = chapter.attributes.chapter;
  return (
    <tr className="border-b dark:border-neutral-700 text-neutral-950 dark:text-neutral-200 bg-gray-50 dark:bg-neutral-950/50 even:dark:bg-rose-300/20 cursor-pointer dark:hover:bg-neutral-950 dark:even:hover:bg-rose-300/40">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-neutraL-900 whitespace-nowrap dark:text-white"
      >
        {index}
      </th>
      <td className="px-6 py-4">{title || "N/A"}</td>
      <td className="px-6 py-4">placeholder</td>
    </tr>
  );
};

export default ChapterItem;
