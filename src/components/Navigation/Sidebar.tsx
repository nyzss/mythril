import SidebarItem from "./SidebarItem";
import routes from "../../utils/Routes";
import SidebarProfile from "./SidebarProfile";

const Sidebar = () => {
  return (
    <div className="min-w-[16rem] sticky top-0 flex flex-col justify-between border-e bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950/80 dark:text-gray-100 h-full select-none">
      <div className="px-4 py-6">
        {/* <Link
          to={"/"}
          className="grid h-10 w-32 place-content-center rounded-lg text-xl text-neutral-950 dark:text-rose-200 font-bold cursor-pointer"
        >
          Mythril
        </Link> */}

        <ul className="mt-6 space-y-3">
          <h1>search bar here after</h1>
          {routes.map((route) => (
            <SidebarItem key={route.index} path={route.path}>
              {route.name}
            </SidebarItem>
          ))}
        </ul>
      </div>

      {/* Sidebar profile section */}
      <SidebarProfile />
    </div>
  );
};

export default Sidebar;
