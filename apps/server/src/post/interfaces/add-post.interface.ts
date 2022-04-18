import { IMetaData } from "@/common/interfaces/storage.interface";
import { PostType } from "@/prisma/generated/type-graphql";
import { FfprobeData } from "fluent-ffmpeg";
import { FileUpload } from "graphql-upload";
import {
  AddClipPostInput,
  AddMediaPostInput,
  AddPollPostInput,
  AddTextualPostInput,
} from "../inputs/add-post.input";
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

export interface IAddTextualPostParams {
  userId: string;
  addTextualPostInput: AddTextualPostInput;
}

export interface IAddPollPostParams {
  userId: string;
  addPollPostInput: AddPollPostInput;
}

export interface IAddMediaPostParams {
  userId: string;
  addPostInput: AddMediaPostInput;
  urls: string[];
  metaData?: IMetaData;
  extraOptions?: IAddMediaPostExtraOptions;
}

export interface IAddClipPostParams {
  userId: string;
  addPostInput: AddClipPostInput;
  urls: string[];
  extraOptions?: IAddClipPostExtraOptions;
}

export interface IAddClipPostServiceParams {
  userId: string;
  addClipPostInput: AddClipPostInput;
  clipMedia: Promise<FileUpload>;
  clipAudioMedia: Promise<FileUpload>;
}

export interface IAddMediaPostServiceParams {
  userId: string;
  addMediaPostInput: AddMediaPostInput;
  media: Promise<FileUpload>[];
  mediaThumbnail: Promise<FileUpload>;
}

export interface IValidateAddMediaPostInputParams {
  addPostInput: AddMediaPostInput;
  media: Promise<FileUpload>[];
  metadata: FfprobeData;
}

export interface IUploadThumbnailResponse {
  fileUrl: string;
  metadata: IMetaData;
}
