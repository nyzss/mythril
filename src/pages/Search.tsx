import { Link, useNavigate, useParams } from "react-router-dom";
import { useSearchMangas } from "../utils/queries";
import Markdown from "react-markdown";

const Search = () => {
  const navigate = useNavigate();
  const { params } = useParams();

  const { data: mangas } = useSearchMangas({ title: params });
  if (!params && !mangas) return <>Couldn't find what you're looking for.</>;

  return (
    <div className="p-8 space-y-3">
      <h1>searched for "{params}"</h1>
      <div className="flex flex-col gap-5">
        {mangas?.map((manga) => (
          <div
            onClick={() => navigate("/library/" + manga.id)}
            key={manga.id}
            className="p-4 cursor-pointer bg-neutral-200/70 dark:bg-neutral-900 hover:bg-rose-400/20 dark:hover:bg-rose-400/10 space-y-2"
          >
            <h1 className="text-neutral-900 dark:text-neutral-100 font-bold text-2xl whitespace-break-spaces">
              {manga.attributes.title.en}
            </h1>
            {manga.attributes.description.en && (
              <Markdown className="prose dark:prose-invert text-sm text-neutral-500 dark:text-neutral-400 line-clamp-4 hover:line-clamp-none transition-all">
                {manga.attributes.description.en}
              </Markdown>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
