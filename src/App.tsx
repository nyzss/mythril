import MainNav from "./components/Navigation/MainNav";
import { Routes, Route } from "react-router-dom";
import { useAtomValue } from "jotai";
import { userPreferencesAtom } from "./utils/atoms";
import routes from "./utils/Routes";
import { useEffect } from "react";

//
const App = () => {
  const { colorMode } = useAtomValue(userPreferencesAtom);

  useEffect(() => {
    if (colorMode === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [colorMode]);

  return (
    <main className="transition-colors bg-neutral-50 text-neutral-950 dark:bg-neutral-900 dark:text-slate-100 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <MainNav>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} key={route.index}>
              <Route index element={route.element} />
              <Route path={route.child?.param} element={route.child?.element} />
            </Route>
          ))}
        </Routes>
      </MainNav>
    </main>
  );
};

export default App;
