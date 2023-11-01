import SidebarItem from "./SidebarItem";
import routes from "../../utils/Routes";
import SidebarProfile from "./SidebarProfile";

import { Menu } from "lucide-react";
import { useState } from "react";
import SearchField from "./SearchField";
import { Link } from "react-router-dom";
import Logo from "../Main/Logo";

const Sidebar = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const handleShow = () => {
    setShowSideBar((prev) => !prev);
  };

  return (
    <>
      <button
        className="fixed top-0 right-0 p-1 rounded-md m-2 border border-neutral-700 z-30 lg:hidden"
        onClick={handleShow}
      >
        <Menu size={36} />
      </button>

      <div
        // ref={ref}
        className={`min-w-[18rem] lg:sticky top-0 flex flex-col justify-between border-e bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-gray-100 select-none transition-all opacity-0 fixed lg:opacity-100 ${
          showSideBar ? "opacity-100 w-64 h-full z-30" : ""
        }`}
      >
        <div className="px-4 py-6">
          <Link to="/" className="">
            <Logo />
            {/* <Logo2 /> */}
          </Link>

          <SearchField />
          <ul className="mt-6 space-y-3" onClick={handleShow}>
            {routes.map((route) => {
              if (!route.icon) return;
              return (
                <SidebarItem
                  key={route.index}
                  path={route.path}
                  Icon={route.icon}
                >
                  {route.name}
                </SidebarItem>
              );
            })}
          </ul>
        </div>

        {/* Sidebar profile section */}
        <SidebarProfile />
      </div>
    </>
  );
};

export default Sidebar;
