import SidebarItem from "./SidebarItem";
import routes from "../../utils/Routes";
import SidebarProfile from "./SidebarProfile";

import { Menu } from "lucide-react";
import { useState } from "react";
import SearchField from "./SearchField";
import { Link } from "react-router-dom";
import Logo from "../Main/Logo";

const Sidebar = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const BackgroundOverlay = () => (
    <div
      className="flex lg:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"
      onClick={() => {
        setShow((prev) => !prev);
      }}
    />
  );

  return (
    <>
      <button
        className="fixed top-0 right-0 block lg:hidden p-4"
        onClick={() => setShow((prev) => !prev)}
      >
        <Menu size={48} />
      </button>
      <div
        className={`bg-black w-72 transition-[margin-left] ease-in-out duration-500 fixed lg:static top-0 bottom-0 left-0 z-40 ${
          show ? "ml-0" : "-ml-72 lg:ml-0"
        }`}
      >
        <div className="flex flex-col justify-between h-full w-72">
          <div className="px-4 py-6">
            <Link to="/">
              <Logo />
            </Link>

            <SearchField />
            <ul
              className="mt-6 space-y-3"
              onClick={() => setShow((prev) => !prev)}
            >
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
      {show ? <BackgroundOverlay /> : <></>}
    </>
  );
};

export default Sidebar;
