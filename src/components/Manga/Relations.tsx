import { Relationship, Tag } from "../../types/manga";
import { tagCheck } from "../../utils/helper";
import RelationTag from "./RelationTag";

const Relations = ({
  children,
  relations,
}: {
  children: string;
  relations: Tag[] | Relationship[];
}) => {
  const isTag = tagCheck(relations);
  const isEmpty = !relations.some((rel) => rel.type);
  return (
    <ul>
      <h1
        className={`font-bold text-rose-400 dark:text-rose-500 text-xl ${
          isEmpty ? "text-neutral-400 dark:text-neutral-500" : ""
        }`}
      >
        {children}
      </h1>
      <div className="flex flex-row gap-2">
        {isTag &&
          relations.map((content) => (
            <RelationTag key={content.id}>
              {content.attributes.name.en}
            </RelationTag>
          ))}
        {isEmpty && (
          <h1 className="text-neutral-400 dark:text-neutral-600">N/A</h1>
        )}
        {!isTag &&
          relations.map((content) => (
            <RelationTag key={content.id}>
              {content.attributes?.name}
            </RelationTag>
          ))}
      </div>
    </ul>
  );
};

export default Relations;
