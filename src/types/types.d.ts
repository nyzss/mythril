import { LucideIcon } from "lucide-react";

type ColorMode = "light" | "dark";

type CoverResolution = "original" | "medium" | "low";

interface TRoutes {
  name: string;
  path: string;
  element: ReactNode;
  index: number;
  icon: LucideIcon;
  child?: Child;
}

interface Child {
  element: ReactNode;
  param: string;
}

export { ColorMode, TRoutes, CoverResolution };
