import Home from "../pages/Home";
import Library from "../pages/Library";
import Manga from "../pages/Manga";
import { TRoutes } from "../types/types";

const routes: TRoutes[] = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    index: 1,
  },
  {
    name: "Library",
    path: "/library",
    element: <Library />,
    index: 2,
    child: { element: <Manga />, param: ":mangaId" },
  },
  {
    name: "Updated",
    path: "/updated",
    element: <Home />,
    index: 3,
  },
];

export default routes;
