import { TManga } from "../../types/manga";

const SingleManga = ({ manga }: { manga: TManga }) => {
  if (!manga) return <>Loading...</>;
  return (
    <div>
      <h1>{manga.attributes.title.en}</h1>
      <p>{manga.attributes.description.en}</p>
    </div>
  );
};

export default SingleManga;
