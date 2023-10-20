import { Link } from "react-router-dom";
import { TManga } from "../../types/manga";
import { createCoverUrl } from "../../utils/helper";

const MangaCard = ({ manga }: { manga: TManga }) => {
  const coverRelation = manga.relationships.find(
    (el) => el.type === "cover_art"
  );

  const placeholderImg = "https://placehold.co/400x600";

  const coverUrl = coverRelation?.attributes?.fileName
    ? createCoverUrl({
        mangaId: manga.id,
        coverFileName: coverRelation?.attributes?.fileName,
        resolution: "low",
      })
    : placeholderImg;

  return (
    <div key={manga.id} className="cursor-pointer max-h-96 relative">
      <Link to={`/library/${manga.id}`}>
        <img
          src={coverUrl}
          className="rounded-md"
          alt={manga.attributes.title.en}
        />
        <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/70 rounded-md absolute bottom-0 px-4 py-3 w-full h-full flex justify-center items-center">
          <h1 className="text-neutral-50 font-semibold text-2xl">
            {manga.attributes.title.en}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default MangaCard;
