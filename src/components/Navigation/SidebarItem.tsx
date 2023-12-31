import { LucideProps } from "lucide-react";
import { ComponentType, LiHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SidebarItem = ({
  children,
  path,
  Icon,
}: {
  children: React.ReactNode;
  path: string;
  Icon: ComponentType<LucideProps>;
}) => {
  const location = useLocation();
  return (
    <li>
      <Link
        to={path}
        className={`block rounded-lg bg-neutral-200/60 dark:bg-neutral-900 px-4 py-2 text-md font-medium dark:text-gray-100 hover:bg-neutral-200 ${
          location.pathname === path
            ? "bg-neutral-100 text-rose-600 dark:bg-neutral-800/70 dark:text-rose-400"
            : ""
        }`}
      >
        <div className="flex gap-4">
          <Icon size={22} />
          {children}
        </div>
      </Link>
    </li>
  );
};

export default SidebarItem;
