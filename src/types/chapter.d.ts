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
  type: RelationshipType;
}

export type RelationshipType = "scanlation_group" | "manga" | "user";
