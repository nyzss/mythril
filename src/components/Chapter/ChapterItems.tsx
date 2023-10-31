import { Link } from "react-router-dom";
import { TChapter } from "../../types/chapter";
import { useMemo } from "react";

const ChapterItems = ({ chapter }: { chapter: TChapter }) => {
  const relations = useMemo(
    () =>
      chapter.relationships.filter((rel) => rel.type === "scanlation_group"),
    [chapter]
  );

  return (
    <Link
      to={"/chapter/" + chapter.id}
      className="flex flex-row justify-between p-3 bg-neutral-200/70 dark:bg-neutral-800 rounded-md items-center hover:bg-rose-400/20 dark:hover:bg-rose-400/20"
    >
      <h1>{chapter.attributes.chapter}</h1>
      <h1>{chapter.attributes.title || "N/A"}</h1>
      <div className="flex flex-row gap-2">
        {relations.map((group) => (
          <h1
            key={group.id}
            className="bg-neutral-100 dark:bg-neutral-950/50 border dark:border-neutral-900 hover:bg-rose-400/10 dark:hover:bg-rose-400/10 transition-colors duration-300 dark:hover:border-rose-300/20 hover:border-rose-300/20  rounded-md py-2 px-4 cursor-pointer"
          >
            {group.attributes?.name || "No Group"}
          </h1>
        ))}
      </div>
    </Link>
  );
};

export default ChapterItems;
