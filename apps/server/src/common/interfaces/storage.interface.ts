import { AzureContainersEnum } from "@/user/enums/file.enum";
import { BlobUploadCommonResponse } from "@azure/storage-blob";
import { ResourceType, UploadApiResponse } from "cloudinary";

export type IBlobUploadCommonResponse = BlobUploadCommonResponse & {
  filename: string;
  metadata: string[];
};

export type IUploadApiResponse = UploadApiResponse & {
  metadata: string[];
};

export interface IFileOptions {
  resourceType?: ResourceType;
  folder?: string;
  containerName?: AzureContainersEnum;
  onSuccess?: (
    uploadResponse: IBlobUploadCommonResponse | UploadApiResponse,
    fileUrl: string,
  ) => Promise<void>;
  onError?: (err: Error) => Promise<void>;
  onCompletion?: (
    uploadResponses: IBlobUploadCommonResponse[] | IUploadApiResponse[],
    fileUrls: string[],
  ) => Promise<void>;
}
