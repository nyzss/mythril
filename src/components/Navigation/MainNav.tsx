import React from "react";
import TitleBar from "./TitleBar";
import Sidebar from "./Sidebar";

const MainNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-screen">
        <div className="flex flex-col h-full">
          <div className="flex-initial">
            <TitleBar />
          </div>
          <div className="flex flex-row overflow-auto border-t-2 dark:border-neutral-900 h-full">
            <Sidebar />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
