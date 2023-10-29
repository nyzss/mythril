import { Link } from "react-router-dom";
import { TManga } from "../../types/manga";
import { RUNNING_IN_TAURI, createCoverUrl } from "../../utils/helper";
import { proxyUrl } from "../../utils/api";

const MangaCard = ({ manga }: { manga: TManga }) => {
  const coverUrl = createCoverUrl(manga, "low");

  const baseApi = RUNNING_IN_TAURI ? "" : proxyUrl;
  const finalUrl = `${baseApi}/${coverUrl}`;
  return (
    <Link
      to={"/library/" + manga.id}
      className="flex justify-center items-center overflow-hidden w-64 relative"
    >
      <img
        src={finalUrl}
        className="rounded-md shrink-0 w-full h-full object-cover"
        alt={manga.attributes.title.en}
      />
      <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/80 rounded-md absolute bottom-0 px-4 py-3 w-full h-full flex justify-center items-center">
        <h1 className="text-neutral-50 font-semibold text-2xl">
          {manga.attributes.title.en}
        </h1>
      </div>
    </Link>
  );
};

export default MangaCard;
