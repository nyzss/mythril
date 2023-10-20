// type classProp = string & React.HTMLAttributes<HTMLDivElement>;
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SidebarItem = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  const location = useLocation();
  return (
    <li>
      <Link
        to={path}
        className={`block rounded-lg bg-neutral-100 dark:bg-neutral-950/80 px-4 py-2 text-sm font-medium dark:text-gray-100 hover:bg-neutral-200 ${
          location.pathname === path
            ? "bg-neutral-100 text-rose-600 dark:bg-neutral-950 dark:text-rose-200"
            : ""
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export default SidebarItem;
