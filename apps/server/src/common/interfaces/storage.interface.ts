import { AzureContainersEnum } from "@/user/enums/file.enum";
import { BlobUploadCommonResponse } from "@azure/storage-blob";
import { ResourceType, UploadApiResponse } from "cloudinary";

export type IMetaTag = {
  tag: string;
  probability: number;
};

export type IMetaData = {
  metaTags: IMetaTag[];
};

export type IBlobUploadCommonResponse = BlobUploadCommonResponse & {
  filename: string;
  metadata: IMetaData;
};

export type IUploadApiResponse = UploadApiResponse & {
  metadata: IMetaData;
};

export interface IFileOptions {
  resourceType?: ResourceType;
  folder?: string;
  containerName?: AzureContainersEnum;
  disableMetaTags?: boolean;
  onSuccess?: (
    uploadResponse: IBlobUploadCommonResponse | IUploadApiResponse,
    fileUrl: string,
  ) => Promise<void>;
  onError?: (err: Error) => Promise<void>;
  onCompletion?: (
    uploadResponses: IBlobUploadCommonResponse[] | IUploadApiResponse[],
    fileUrls: string[],
  ) => Promise<void>;
}
