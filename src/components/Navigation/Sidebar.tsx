import SidebarItem from "./SidebarItem";
import routes from "../../utils/Routes";
import SidebarProfile from "./SidebarProfile";
import { useState } from "react";
import { Menu } from "lucide-react";

const Sidebar = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const handleShow = () => {
    setShowSideBar((prev) => !prev);
  };

  return (
    <>
      <button
        className="fixed top-0 right-0 p-1 rounded-md m-2 border border-neutral-700 z-20 lg:hidden"
        onClick={handleShow}
      >
        <Menu size={36} />
      </button>
      <div
        className={
          showSideBar ? "w-full h-full bg-neutral-950/50 z-20 fixed" : ""
        }
        onClick={handleShow}
      >
        <div
          className={`min-w-[18rem] sticky top-0 flex flex-col justify-between border-e bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-gray-100 select-none transition-all ${
            showSideBar ? "h-full w-64" : "hidden"
          }`}
        >
          <div className="px-4 py-6">
            {/* <Link
          to={"/"}
          className="grid h-10 w-32 place-content-center rounded-lg text-xl text-neutral-950 dark:text-rose-200 font-bold cursor-pointer"
        >
          Mythril
        </Link> */}

            <ul className="mt-6 space-y-3">
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
      </div>
    </>
  );
};

export default Sidebar;
