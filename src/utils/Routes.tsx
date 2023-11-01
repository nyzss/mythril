import {
  Home as HomeIcon,
  Library as LibraryIcon,
  Newspaper,
} from "lucide-react";
import Home from "../pages/Home";
import Library from "../pages/Library";
import Manga from "../pages/Manga";
import { TRoutes } from "../types/types";
import Chapter from "../pages/Chapter";
import Search from "../pages/Search";

const routes: TRoutes[] = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    index: 1,
    icon: HomeIcon,
  },
  {
    name: "Library",
    path: "/library",
    element: <Library />,
    index: 2,
    icon: LibraryIcon,
    child: { element: <Manga />, param: ":mangaId" },
  },
  {
    name: "Updated",
    path: "/updated",
    element: <Home />,
    index: 3,
    icon: Newspaper,
  },
  {
    name: "Chapter",
    path: "/chapter",
    index: 4,
    child: {
      element: <Chapter />,
      param: ":chapterId",
    },
  },
  {
    name: "Search",
    path: "/search",
    index: 5,
    child: {
      element: <Search />,
      // might wanna get more details later on such as the language preference, tags, genres and stuff...
      param: ":params",
    },
  },
];

export default routes;
