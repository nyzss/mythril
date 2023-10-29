import { useEffect } from "react";
import { RUNNING_IN_TAURI, createFetchUrl } from "../utils/helper";
import { Config } from "../types/types";
import { defaultConfig } from "../utils/api";
import { TManga } from "../types/manga";

const Home = () => {
  console.log(RUNNING_IN_TAURI);
  useEffect(() => {
    const bai = "https://bai-hwge.onrender.com";
    const baseApi = "https://api.mangadex.org";
    const apiUrl = RUNNING_IN_TAURI ? baseApi : `${bai}/${baseApi}`;

    const baseUrl = `${apiUrl}/manga`;
    const config: Config = {
      ...defaultConfig,
      includes: ["cover_art", "artist", "author"],
      contentRating: ["safe"],
      url: baseUrl,
    };

    const fetchUrl = createFetchUrl(config);

    if (!RUNNING_IN_TAURI) {
      fetch(fetchUrl)
        .then((res: any) => res.json())
        .then((res: any) => res.data)
        .then((res: TManga[]) => {
          console.log(res);
        });
    }

    console.log(fetchUrl);
    // console.log("running in tauri");
  }, []);

  return (
    <div>
      <h1 className="h-96">hello guys</h1>
    </div>
  );
};

export default Home;
