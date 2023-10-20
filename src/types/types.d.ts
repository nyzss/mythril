type ColorMode = "light" | "dark";

type CoverResolution = "original" | "medium" | "low";

interface TRoutes {
  name: string;
  path: string;
  element: ReactNode;
  index: number;
  child?: Child;
}

interface Child {
  element: ReactNode;
  param: string;
}

export { ColorMode, TRoutes, CoverResolution };
