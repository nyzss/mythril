import SidebarItem from "./SidebarItem";
import routes from "../../utils/Routes";
import SidebarProfile from "./SidebarProfile";

import { Menu } from "lucide-react";
import { useState } from "react";
import { useOutsideClick } from "../../utils/queries";

const Sidebar = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const handleShow = () => {
    setShowSideBar((prev) => !prev);
  };

  const outsideClickHandler = () => {
    if (showSideBar) {
      setShowSideBar(false);
    }
  };
  const ref = useOutsideClick(outsideClickHandler);
  return (
    <>
      <button
        className="fixed top-0 right-0 p-1 rounded-md m-2 border border-neutral-700 z-20 lg:hidden"
        onClick={handleShow}
      >
        <Menu size={36} />
      </button>

      <div
        ref={ref}
        className={`min-w-[18rem] lg:sticky top-0 flex flex-col justify-between border-e bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-gray-100 select-none transition-all opacity-0 fixed lg:opacity-100 ${
          showSideBar ? "opacity-100 w-64 h-full z-20" : ""
        }`}
      >
        <div className="px-4 py-6">
          {/* <Link
          to={"/"}
          className="grid h-10 w-32 place-content-center rounded-lg text-xl text-neutral-950 dark:text-rose-200 font-bold cursor-pointer"
        >
          Mythril
        </Link> */}

          <ul className="mt-6 space-y-3" onClick={handleShow}>
            <h1>search bar here after</h1>
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
