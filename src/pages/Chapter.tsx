import { useParams } from "react-router-dom";
import { useChapterImages } from "../utils/queries";

const Chapter = () => {
  const { chapterId } = useParams();
  if (!chapterId) return <>No matching chapter ID was found.</>;

  const { data } = useChapterImages(chapterId);

  const baseUrl = data?.baseUrl;
  const hash = data?.chapter.hash;

  const images = data?.chapter.data;

  const nextPage = () => {
    console.log("clicked");
    window.scrollBy(0, window.innerHeight);
  };
  return (
    <div className="w-full h-full">
      <h1 className="fixed">{chapterId}</h1>
      <div className="flex flex-col gap-2 justify-center items-center">
        {images?.map((image, index) => (
          <img
            src={`${baseUrl}/data/${hash}/${image}`}
            className="max-w-6xl"
            key={index}
            alt="chapter image"
            onClick={nextPage}
          />
        ))}
      </div>
    </div>
  );
};

export default Chapter;
