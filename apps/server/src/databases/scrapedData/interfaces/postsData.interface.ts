import { Prisma } from "@prisma/client";

export interface IPosts {
  caption?: string;
  url?: string;
  thumbnail?: string;
  tags: string[];
  metaTags: Prisma.JsonArray[];
  type: Type;
  text?: string;
}

export interface IMetaTag {
  tag: string;
  probability: number;
}

export enum Type {
  Audio = "AUDIO",
  Photo = "PHOTO",
  Textual = "TEXTUAL",
  Video = "VIDEO",
}
