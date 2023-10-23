import { LucideIcon } from "lucide-react";
import { ContentRating, RelationshipType } from "./manga";
import { ChapterRelationshipType } from "./chapter";

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
  url: string;
  limit?: number;
  offset?: number;
  includes?: RelationshipType[] | ChapterRelationshipType[];
  contentRating?: ContentRating[];
}
