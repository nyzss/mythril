import { AltTitle } from "./manga";

export interface TChapter {
  id: string;
  type: "chapter";
  attributes: Attributes;
  relationships: Relationship[];
}

export interface Attributes {
  volume: string;
  chapter: string;
  title: string;
  translatedLanguage: TranslatedLanguage;
  externalUrl: null;
  publishAt: Date;
  readableAt: Date;
  createdAt: Date;
  updatedAt: Date;
  pages: number;
  version: number;
}

export type TranslatedLanguage = "id" | "en" | "bg" | "ru" | "pt-br" | "zh-hk";

export interface Relationship {
  id: string;
  type: ChapterRelationshipType;
  attributes?: RelationshipAttributes;
}

export interface RelationshipAttributes {
  name: string;
  altNames: AltTitle[];
  locked: boolean;
  website: null | string;
  ircServer: null;
  ircChannel: null;
  discord: string;
  contactEmail: string;
  description: string;
  twitter: null | string;
  mangaUpdates: null | string;
  focusedLanguages: TranslatedLanguage[];
  official: boolean;
  verified: boolean;
  inactive: boolean;
  publishDelay: null;
  exLicensed?: boolean;
  createdAt: Date;
  updatedAt: Date;
  version: number;
}

export type ChapterRelationshipType = "scanlation_group" | "manga" | "user";
