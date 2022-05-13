import { FileUpload } from "graphql-upload";
import { fileOptionsDefaults } from "../defaults/azure-storage.defaults";
import {
  IFileOptions,
  IUploadApiResponse,
} from "../interfaces/storage.interface";
import cloudinary from "cloudinary";
import config from "@/configs";
import { nanoid } from "nanoid";
import { logger } from "@/utils/logger";
import MediaHelper from "../helpers/media.helper";
import MediaService from "./media.service";
import { Readable } from "stream";
import { injectable } from "tsyringe";

@injectable()
class CloudinaryStorageService {
  cloudinaryv2 = cloudinary.v2;

  constructor(
    private readonly mediaHelper: MediaHelper,
    private readonly mediaService: MediaService,
  ) {
    this.cloudinaryv2.config({
      cloud_name: config.get("cloudinary.cloudName"),
      api_key: config.get("cloudinary.apiKey"),
      api_secret: config.get("cloudinary.apiSecret"),
    });
  }
  private async uploadFileToCloudinary(
    { filename, createReadStream }: Partial<FileUpload>,
    options: IFileOptions = fileOptionsDefaults,
  ): Promise<IUploadApiResponse> {
    const { folder, containerName, resourceType } = options;
    return new Promise<IUploadApiResponse>((resolve, reject) => {
      const buffer = [];

      createReadStream()
        .on("data", async data => {
          buffer.push(data);
        })
        .on("end", async () => {
          const extension = this.mediaHelper.getFileExtension(filename);

          const newFileName = this.mediaHelper.getFileName(filename);

          const combinedBuffer = Buffer.concat(buffer);

          const file = await this.mediaService.compressImage(
            combinedBuffer,
            extension,
          );

          const metaTags = options.disableMetaTags
            ? []
            : await this.mediaService.getMetaTags(file, extension);

          const stream = this.cloudinaryv2.uploader.upload_stream(
            {
              public_id: folder
                ? `${containerName}/${folder}/${nanoid()}${newFileName}`
                : `${containerName}/${nanoid()}${newFileName}`,
              resource_type: resourceType || "raw",
            },
            async (error, result) => {
              result
                ? resolve({ ...result, metadata: { metaTags } })
                : reject(error);
            },
          );

          const readableStream = Readable.from(file);

          readableStream.pipe(stream);
        });
    });
  }
  public async uploadFile(
    file: Partial<FileUpload>,
    options: IFileOptions = fileOptionsDefaults,
  ) {
    const { onSuccess, onError, onCompletion } = options;
    try {
      const uploadResponse = await this.uploadFileToCloudinary(file, options);

      onSuccess?.(uploadResponse, uploadResponse.secure_url);

      onCompletion?.([uploadResponse] as IUploadApiResponse[], [
        uploadResponse.secure_url,
      ]);
    } catch (error) {
      logger.error(error);
      onError?.(error);
    }
  }
  public async uploadFiles(
    files: Promise<Partial<FileUpload>>[],
    options: IFileOptions = fileOptionsDefaults,
  ) {
    const { onSuccess, onError, onCompletion } = options;

    const uploadResponses: IUploadApiResponse[] = [];
    const fileUrls: string[] = [];

    (await Promise.all(files)).forEach(async file => {
      try {
        const uploadResponse = await this.uploadFileToCloudinary(file, options);

        uploadResponses.push(uploadResponse);
        fileUrls.push(uploadResponse.secure_url);

        onSuccess?.(uploadResponse, uploadResponse.secure_url);

        if (fileUrls.length === files.length) {
          onCompletion?.(uploadResponses, fileUrls);
        }
      } catch (error) {
        logger.error(error);
        onError?.(error);
      }
    });
  }
}

export default CloudinaryStorageService;
