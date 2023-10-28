import { LucideIcon } from "lucide-react";
import { ContentRating, RelationshipType } from "./manga";
import { ChapterRelationshipType, TranslatedLanguage } from "./chapter";

export type ColorMode = "light" | "dark";

export type CoverResolution = "original" | "medium" | "low";

export interface TRoutes {
  name: string;
  path: string;
  element?: ReactNode;
  index: number;
  icon?: LucideIcon;
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
  order?: MangaOrder | ChapterOrder;
}

export interface ChapterOrder {
  chapter?: OrderEnum;
  volume?: OrderEnum;
  createdAt?: OrderEnum;
  updatedAt?: OrderEnum;
  publishAt?: OrderEnum;
  readableAt?: OrderEnum;
}

export interface MangaOrder {
  title?: OrderEnum;
  year?: OrderEnum;
  createdAt?: OrderEnum;
  updatedAt?: OrderEnum;
  latestUploadedChapter?: OrderEnum;
  followedCount?: OrderEnum;
  relevance?: OrderEnum;
}

export type OrderEnum = "asc" | "desc";

export interface UserPreferences {
  interfaceLanguage?: string;
  preferredLanguage?: TranslatedLanguage | null;
  colorMode?: ColorMode;
}
