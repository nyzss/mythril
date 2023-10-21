import { Tag } from "../../types/manga";

const TagSection = ({
  children,
  tagContent,
}: {
  children: string;
  tagContent: Tag[];
}) => {
  if (!tagContent.find((content) => content.attributes.group)) return <></>;
  return (
    <ul>
      <h1 className="font-bold text-rose-400 dark:text-rose-300 text-xl">
        {children}
      </h1>
      {tagContent.map((content) => (
        <li key={content.id}>{content.attributes.name.en}</li>
      ))}
    </ul>
  );
};

export default TagSection;
