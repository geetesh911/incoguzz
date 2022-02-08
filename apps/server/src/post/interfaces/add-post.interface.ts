import { PostType } from "@/prisma/generated/type-graphql";
import PlaceInput from "../inputs/place.input";

export interface IAddMediaPostExtraOptions {
  thumbnailUrl?: string;
}

export interface IAddClipPostExtraOptions extends IAddMediaPostExtraOptions {
  audioUrl?: string;
  audioName?: string;
}

export interface BasicPostCreateInput {
  type: PostType;
  published: boolean;
  userId: string;
  tags: string[];
}

export interface BasicMediaPostCreateInput extends BasicPostCreateInput {
  place: PlaceInput;
  caption: string;
}
