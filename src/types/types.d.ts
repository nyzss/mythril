import { LucideIcon } from "lucide-react";
import { ContentRating, RelationshipType } from "./manga";

export type ColorMode = "light" | "dark";

export type CoverResolution = "original" | "medium" | "low";

export interface TRoutes {
  name: string;
  path: string;
  element: ReactNode;
  index: number;
  icon: LucideIcon;
  child?: Child;
}

export interface Child {
  element: ReactNode;
  param: string;
}

export interface Config {
  limit?: number;
  offset?: number;
  includes?: RelationshipType[];
  contentRating?: ContentRating[];
}
