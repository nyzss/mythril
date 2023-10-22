import { ReactNode } from "react";

const RelationTag = ({ children }: { children: ReactNode }) => {
  return (
    <li className="cursor-pointer">
      <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2 py-0.5 rounded dark:bg-rose-200/80 transition-colors duration-300 dark:hover:bg-rose-300 dark:text-neutral-950">
        {children}
      </span>
    </li>
  );
};

export default RelationTag;
