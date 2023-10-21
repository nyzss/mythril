// import { Tab } from "@headlessui/react";
import { createCoverUrl, tagFilter } from "../../utils/helper";
import Markdown from "react-markdown";
import { TManga } from "../../types/manga";
import MangaRelations from "./MangaRelations";

const SingleManga = ({ manga }: { manga: TManga }) => {
  if (!manga) return <>Loading...</>;
  const coverRelation = manga.relationships.find(
    (el) => el.type === "cover_art"
  );

  const placeholderImg = "https://placehold.co/400x600";

  const attributes = manga.attributes;
  const tags = manga.attributes.tags;

  const genres = tagFilter(tags, "genre");
  const themes = tagFilter(tags, "theme");
  const formats = tagFilter(tags, "format");
  const contents = tagFilter(tags, "content");

  const coverUrl = coverRelation?.attributes?.fileName
    ? createCoverUrl({
        mangaId: manga.id,
        coverFileName: coverRelation?.attributes?.fileName,
        resolution: "original",
      })
    : placeholderImg;

  const artist = manga.relationships.filter((rel) => rel.type === "artist");
  const author = manga.relationships.filter((rel) => rel.type === "author");

  return (
    <div className="py-8 mx-auto">
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
            <div className="flex flex-col">
              <MangaRelations relations={contents}>Contents</MangaRelations>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="flex flex-row gap-2">
                <MangaRelations relations={artist}>Artist</MangaRelations>
                <MangaRelations relations={author}>Author</MangaRelations>
              </div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <MangaRelations relations={genres}>Genres</MangaRelations>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <MangaRelations relations={themes}>Themes</MangaRelations>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <MangaRelations relations={formats}>Formats</MangaRelations>
            </div>
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
