import { AzureContainersEnum } from "@/user/enums/file.enum";
import { FfprobeData } from "fluent-ffmpeg";
import { ReadStream } from "fs";

export interface IExtractAudioOptions {
  metadata?: boolean;
}

export interface IVideoThumbnail {
  thumbnailReadStream: () => ReadStream;
  thumbnailFilename: string;
}

export type IGetVideoThumbnail = IVideoThumbnail & {
  metadata?: FfprobeData;
  containerName?: AzureContainersEnum;
};

export interface IVideoPreview {
  thumbnailReadStream: () => ReadStream;
}

export type IExtractAudio = IVideoThumbnail & {
  audioReadStream: () => ReadStream;
  audioFilename: string;
  metadata?: FfprobeData;
};
