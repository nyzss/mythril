import { X, Minus, ChevronLeft, ChevronRight, Maximize } from "lucide-react";
import { appWindow } from "@tauri-apps/api/window";
import { useNavigate } from "react-router-dom";
import Action from "./TitleBarAction";

const TitleBar = () => {
  const navigate = useNavigate();
  const handleToggleFull = (e: React.MouseEvent<HTMLElement>) => {
    if (e.detail === 2) {
      appWindow.toggleMaximize();
      console.log("hello world");
    }
  };

  return (
    <>
      <div
        data-tauri-drag-region
        className="flex flex-row bg-neutral-50 dark:bg-neutral-950/80 select-none"
      >
        <Action action={() => navigate(-1)}>
          <ChevronLeft />
        </Action>
        <Action action={() => navigate(1)}>
          <ChevronRight />
        </Action>
        <div
          className="flex-grow w-10 h-10 flex justify-center items-center pointer-events-none"
          onClick={handleToggleFull}
          // onMouseDown={() => appWindow.startDragging()}
          data-tauri-drag-region
        >
          mythril
        </div>
        <Action action={() => appWindow.minimize()}>
          <Minus />
        </Action>
        <Action action={() => appWindow.toggleMaximize()}>
          <Maximize />
        </Action>
        <Action action={() => appWindow.close()}>
          <X />
        </Action>
      </div>
    </>
  );
};

export default TitleBar;
