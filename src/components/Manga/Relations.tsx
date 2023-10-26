import { Relationship, Tag } from "../../types/manga";

const Relations = ({
  children,
  relations,
}: {
  children?: string;
  relations: Tag[] | Relationship[];
}) => {
  const isEmpty = !relations.some((rel) => rel.type);

  if (isEmpty) return <></>;

  return (
    <ul>
      <h1 className="text-neutral-800 dark:text-neutral-200 text-md">
        {children}
      </h1>
      <div className="flex flex-row gap-2 flex-wrap">
        {relations.map((content) => (
          <li className="cursor-pointer" key={content.id}>
            <span className="bg-mandy-100 text-mandy-800-800 text-sm mt-1 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-rose-400/30 transition-colors duration-300 dark:hover:bg-rose-300 dark:text-neutral-100 whitespace-nowrap">
              {content.type === "tag"
                ? content.attributes.name.en
                : content.attributes?.name}
            </span>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Relations;
