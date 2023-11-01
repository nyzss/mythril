import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useBrowserUrl,
  useChapter,
  useChapterImages,
  useChapters,
} from "../utils/queries";
import Button from "../components/Main/Button";
import MiniChapterList from "../components/Chapter/MiniChapterList";

const Chapter = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  if (!chapterId) return <>No matching chapter ID was found.</>;

  const { data: chapterImg } = useChapterImages(chapterId);
  const { data: chapterData } = useChapter(chapterId);

  const mangaData = chapterData?.relationships.filter(
    (rel) => rel.type === "manga"
  )[0];

  const { data: allChapters } = useChapters(
    {
      id: mangaData?.id,
      translatedLanguage: [chapterData?.attributes.translatedLanguage!],
    },
    !!mangaData?.id
  );

  const baseUrl = chapterImg?.baseUrl;
  const hash = chapterImg?.chapter.hash;

  const images = chapterImg?.chapter.data;

  const handleNextChapter = () => {
    const i = allChapters?.findIndex((chap) => chap.id === chapterId);
    if (i && allChapters) {
      navigate("/chapter/" + allChapters[i + 1].id);
    }
    console.log("no next chapter found");
  };

  const handlePrevChapter = () => {
    const i = allChapters?.findIndex((chap) => chap.id === chapterId);
    if (i && allChapters) {
      navigate("/chapter/" + allChapters[i - 1].id);
    }
    console.log("no prev chapter found");
  };

  return (
    <div className="w-full h-full">
      <Link to={"/library/" + mangaData?.id} className="flex fixed flex-col">
        <h1>{chapterId}</h1>
        <h1>{mangaData?.attributes?.title.en}</h1>
        <h1>{chapterData?.attributes.chapter}</h1>
      </Link>

      <div className="flex fixed right-0 flex-col p-5 gap-3">
        <div className="flex row gap-2">
          <Button onClick={handlePrevChapter}>prev</Button>
          <Button onClick={handleNextChapter}>next</Button>
        </div>
        <h1>hello listbox here</h1>
        <MiniChapterList chapters={allChapters} current={chapterId} />
      </div>
      <div className="h-full flex flex-col gap-2 justify-center items-center">
        <div className="max-w-6xl">
          {images?.map((image, index) => (
            <img
              src={useBrowserUrl(`${baseUrl}/data/${hash}/${image}`)}
              className="w-full mx-auto"
              key={index}
              alt="chapter image"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chapter;
