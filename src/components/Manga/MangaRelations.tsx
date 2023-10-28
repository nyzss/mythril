import Relations from "./Relations";
import { relationFilter } from "../../utils/helper";
import { TManga } from "../../types/manga";

const MangaRelations = ({ manga }: { manga: TManga }) => {
  const { genres, artist, author, themes, formats, contents } =
    relationFilter(manga);

  return (
    <div className="flex flex-col pt-3 gap-6">
      <Relations relations={genres} />
      <div className="flex flex-row gap-6 flex-wrap">
        <Relations relations={artist}>Artist</Relations>
        <Relations relations={author}>Author</Relations>
        <Relations relations={themes}>Themes</Relations>
        <Relations relations={formats}>Formats</Relations>
        {/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" /> */}
      </div>
      <Relations relations={contents}>Contents</Relations>
    </div>
  );
};

export default MangaRelations;
