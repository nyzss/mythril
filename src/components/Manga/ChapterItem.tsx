import { TChapter } from "../../types/chapter";
import { getFlag } from "../../utils/helper";

const ChapterItem = ({ chapter }: { chapter: TChapter }) => {
  const title = chapter.attributes.title;
  const index = chapter.attributes.chapter;
  const groups = chapter.relationships.map((rel) => {
    if (rel.type === "scanlation_group") return rel.attributes?.name;
  });

  const language = getFlag(chapter.attributes.translatedLanguage);

  return (
    <tr className="dark:bg-neutral-900 even:dark:bg-neutral-950/10 border-2 dark:border-neutral-700 rounded-md cursor-pointer hover:bg-rose-600/10 dark:hover:bg-rose-500/10 hover:drop-shadow-shadow dark:hover:drop-shadow-glow">
      <th scope="row" className="px-6 py-4 text-center">
        {index}
      </th>
      <td className="px-6 py-4 text-center">{title}</td>
      <td className="px-6 py-4 text-center space-x-2">
        {groups.map((group, index) => (
          <span key={index}>{group}</span>
        ))}
        {language}
      </td>
    </tr>
  );
};

export default ChapterItem;
