// import { Tab } from "@headlessui/react";
import { createCoverUrl } from "../../utils/helper";
import Markdown from "react-markdown";
import { TManga } from "../../types/manga";

const SingleManga = ({ manga }: { manga: TManga }) => {
  if (!manga) return <>Loading...</>;
  const coverRelation = manga.relationships.find(
    (el) => el.type === "cover_art"
  );

  const placeholderImg = "https://placehold.co/400x600";

  const attributes = manga.attributes;

  const genres = attributes.tags.filter(
    (tag) => tag.attributes.group === "genre"
  );
  const formats = attributes.tags.filter(
    (tag) => tag.attributes.group === "format"
  );
  const themes = attributes.tags.filter(
    (tag) => tag.attributes.group === "theme"
  );

  const coverUrl = coverRelation?.attributes?.fileName
    ? createCoverUrl({
        mangaId: manga.id,
        coverFileName: coverRelation?.attributes?.fileName,
        resolution: "original",
      })
    : placeholderImg;

  return (
    <div className="py-8">
      <div className="h-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-rose-500 dark:text-rose-400 mb-2">
          {attributes.title.en ? attributes.title.en : attributes.title.ja}
        </h2>
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 mt-8">
            <div className="mb-4">
              <img
                className="rounded-md h-96 mx-auto"
                src={coverUrl}
                alt={manga.attributes.title.en}
              />
            </div>
          </div>
          <div className="md:flex-1 px-4 my-auto">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {attributes.title.en ? attributes.title.ja : attributes.title.en}
            </p>
            <ul className="flex flex-col">
              <h1 className="font-bold text-rose-400 dark:text-rose-300 text-xl">
                formats
              </h1>
              {formats.map((format) => (
                <li key={format.id}>{format.attributes.name.en}</li>
              ))}

              <h1 className="font-bold text-rose-400 dark:text-rose-300 text-xl">
                themes
              </h1>
              {themes.map((theme) => (
                <li key={theme.id}>
                  <h1>{theme.attributes.name.en}</h1>
                </li>
              ))}

              <h1 className="font-bold text-rose-400 dark:text-rose-300 text-xl">
                genres
              </h1>
              {genres.map((genre) => (
                <li key={genre.id}>{genre.attributes.name.en}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-xl text-rose-400 dark:text-rose-300">
            Description
          </h1>
          <Markdown className="prose dark:prose-invert">
            {manga.attributes.description.en}
          </Markdown>
        </div>
        <h1>where go</h1>
      </div>
    </div>
  );
};

export default SingleManga;
