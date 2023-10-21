export interface TManga {
  id: string;
  type: RelationshipType;
  attributes: MangaAttributes;
  relationships: Relationship[];
}

export interface MangaAttributes {
  title: Title;
  altTitles: AltTitle[];
  description: PurpleDescription;
  isLocked: boolean;
  links: Links;
  originalLanguage: OriginalLanguage;
  lastVolume: null | string;
  lastChapter: null | string;
  publicationDemographic: PublicationDemographic | null;
  status: Status;
  year: number | null;
  contentRating: ContentRating;
  tags: Tag[];
  state: State;
  chapterNumbersResetOnNewVolume: boolean;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  availableTranslatedLanguages: Array<null | string>;
  latestUploadedChapter: string;
}

export interface AltTitle {
  ja?: string;
  en?: string;
  "ja-ro"?: string;
  id?: string;
  it?: string;
  "zh-hk"?: string;
  ru?: string;
  uk?: string;
  fa?: string;
  ne?: string;
  zh?: string;
  ar?: string;
  tr?: string;
  kk?: string;
  "pt-br"?: string;
  ko?: string;
  my?: string;
  th?: string;
  bn?: string;
  mn?: string;
  he?: string;
  vi?: string;
  ms?: string;
  ta?: string;
  hi?: string;
  "zh-ro"?: string;
  fr?: string;
  "es-la"?: string;
  es?: string;
  tl?: string;
  lt?: string;
  da?: string;
  nl?: string;
  pl?: string;
  bg?: string;
  az?: string;
  "ko-ro"?: string;
  pt?: string;
  hu?: string;
  cs?: string;
  de?: string;
  la?: string;
  eo?: string;
  ro?: string;
  hr?: string;
}

export enum ContentRating {
  Erotica = "erotica",
  Safe = "safe",
  Suggestive = "suggestive",
}

export interface PurpleDescription {
  en?: string;
  id?: string;
  "pt-br"?: string;
  ru?: string;
  de?: string;
  es?: string;
  fr?: string;
  it?: string;
  ja?: string;
  pl?: string;
  pt?: string;
  th?: string;
  tr?: string;
  uk?: string;
  "zh-hk"?: string;
  "es-la"?: string;
  ar?: string;
  zh?: string;
  ko?: string;
  vi?: string;
  fa?: string;
  ca?: string;
  eo?: string;
  ms?: string;
  no?: string;
  ro?: string;
  sv?: string;
  kk?: string;
  az?: string;
}

export interface Links {
  al?: string;
  ap?: string;
  bw?: string;
  kt?: string;
  mu?: string;
  nu?: string;
  amz?: string;
  cdj?: string;
  ebj?: string;
  mal?: string;
  raw?: string;
  engtl?: string;
}

export enum OriginalLanguage {
  En = "en",
  Fr = "fr",
  ID = "id",
  Ja = "ja",
  Ko = "ko",
  Zh = "zh",
  ZhHk = "zh-hk",
}

export enum PublicationDemographic {
  Josei = "josei",
  Seinen = "seinen",
  Shoujo = "shoujo",
  Shounen = "shounen",
}

export enum State {
  Published = "published",
}

export enum Status {
  Cancelled = "cancelled",
  Completed = "completed",
  Hiatus = "hiatus",
  Ongoing = "ongoing",
}

export interface Tag {
  id: string;
  type: TagType;
  attributes: TagAttributes;
  relationships: any[];
}

export interface TagAttributes {
  name: Name;
  description: FluffyDescription;
  // group: Group;
  group: Group;
  version: number;
}

export type Group = "content" | "format" | "genre" | "theme";

export interface FluffyDescription {}

// makes my vite weirdly crash??
// export enum Group {
//   Content = "content",
//   Format = "format",
//   Genre = "genre",
//   Theme = "theme",
// }

export interface Name {
  en: string;
}

export enum TagType {
  Tag = "tag",
}

export interface Title {
  en?: string;
  ja?: string;
}

export interface Relationship {
  id: string;
  type: RelationshipType;
  attributes?: RelationshipAttributes;
  related?: string;
}

export interface RelationshipAttributes {
  name?: string;
  imageUrl?: null;
  biography?: Biography;
  twitter?: null | string;
  pixiv?: null | string;
  melonBook?: null;
  fanBox?: null | string;
  booth?: null | string;
  nicoVideo?: null;
  skeb?: null | string;
  fantia?: null | string;
  tumblr?: null | string;
  youtube?: null | string;
  weibo?: null | string;
  naver?: null | string;
  website?: null | string;
  createdAt?: Date;
  updatedAt?: Date;
  version: number;
  description?: DescriptionDescriptionClass | DescriptionEnum;
  volume?: null | string;
  fileName?: string;
  locale?: OriginalLanguage;
  title?: PurpleTitle;
  altTitles?: FluffyAltTitle[];
  isLocked?: boolean;
  links?: Links | null;
  originalLanguage?: PurpleOriginalLanguage;
  lastVolume?: null | string;
  lastChapter?: null | string;
  publicationDemographic?: PublicationDemographic | null;
  status?: FluffyStatus;
  year?: number | null;
  contentRating?: ContentRating;
  tags?: Tag[];
  state?: State;
  chapterNumbersResetOnNewVolume?: boolean;
  availableTranslatedLanguages?: string[];
  latestUploadedChapter?: null | string;
  username?: string;
  roles?: Role[];
}
export interface DescriptionDescriptionClass {
  en?: string;
  da?: string;
  de?: string;
  fi?: string;
  fr?: string;
  id?: string;
  lt?: string;
  no?: string;
  pl?: string;
  ru?: string;
  uk?: string;
  zh?: string;
  "es-la"?: string;
  "pt-br"?: string;
  "zh-hk"?: string;
  it?: string;
  ja?: string;
  pt?: string;
}
export interface PurpleTitle {
  en?: string;
  ja?: string;
}

export interface FluffyAltTitle {
  en?: string;
  de?: string;
  ja?: string;
  "ja-ro"?: string;
  la?: string;
  ca?: string;
  es?: string;
  sq?: string;
  lt?: string;
  uk?: string;
  ru?: string;
  sr?: string;
  fa?: string;
  hi?: string;
  bn?: string;
  he?: string;
  ar?: string;
  te?: string;
  ko?: string;
  zh?: string;
  "zh-hk"?: string;
  th?: string;
  vi?: string;
  ms?: string;
  id?: string;
  "pt-br"?: string;
  el?: string;
  fr?: string;
  ro?: string;
  it?: string;
  kk?: string;
  tr?: string;
  "es-la"?: string;
}

export enum PurpleOriginalLanguage {
  En = "en",
  Fr = "fr",
  ID = "id",
  Ja = "ja",
  Ru = "ru",
  ZhHk = "zh-hk",
}

export enum DescriptionEnum {
  Empty = "",
  NewCover = "New cover",
}

export enum FluffyStatus {
  Completed = "completed",
  Hiatus = "hiatus",
  Ongoing = "ongoing",
}

export interface Biography {
  en?: string;
  ko?: string;
  zh?: string;
}

export enum Role {
  RoleContributor = "ROLE_CONTRIBUTOR",
  RoleForumModerator = "ROLE_FORUM_MODERATOR",
  RoleGlobalModerator = "ROLE_GLOBAL_MODERATOR",
  RoleGroupLeader = "ROLE_GROUP_LEADER",
  RoleGroupMember = "ROLE_GROUP_MEMBER",
  RoleMdAtHome = "ROLE_MD_AT_HOME",
  RoleMember = "ROLE_MEMBER",
  RolePowerUploader = "ROLE_POWER_UPLOADER",
  RoleStaff = "ROLE_STAFF",
  RoleUser = "ROLE_USER",
}

export type RelationshipType =
  | "artist"
  | "author"
  | "cover_art"
  | "creator"
  | "manga";