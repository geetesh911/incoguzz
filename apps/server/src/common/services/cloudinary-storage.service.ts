import { FileUpload } from "graphql-upload";
import { Service } from "typedi";
import { fileOptionsDefaults } from "../defaults/azure-storage.defaults";
import { IFileOptions } from "../interfaces/storage.interface";
import cloudinary, { UploadApiResponse } from "cloudinary";
import config from "@/configs";
import { nanoid } from "nanoid";
@Service()
class CloudinaryStorageService {
  cloudinaryv2 = cloudinary.v2;
  constructor() {
    this.cloudinaryv2.config({
      cloud_name: config.get("cloudinary.cloudName"),
      api_key: config.get("cloudinary.apiKey"),
      api_secret: config.get("cloudinary.apiSecret"),
    });
  }
  private async uploadFileToCloudinary(
    { filename, createReadStream }: Partial<FileUpload>,
    options: IFileOptions = fileOptionsDefaults,
  ): Promise<UploadApiResponse> {
    const { folder, containerName, resourceType } = options;
    return new Promise<UploadApiResponse>((resolve, reject) => {
      const stream = this.cloudinaryv2.uploader.upload_stream(
        {
          public_id: folder
            ? `${containerName}/${folder}/${nanoid()}${filename}`
            : `${containerName}/${nanoid()}${filename}`,
          resource_type: resourceType || "raw",
        },
        (error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        },
      );

      createReadStream().pipe(stream);
    });
  }
  public async uploadFile(
    file: Partial<FileUpload>,
    options: IFileOptions = fileOptionsDefaults,
  ) {
    const { onSuccess, onError, onCompletion } = options;
    try {
      const uploadResponse = await this.uploadFileToCloudinary(file, options);

      console.log(uploadResponse);

      onSuccess && onSuccess(uploadResponse, uploadResponse.secure_url);

      onCompletion &&
        onCompletion([uploadResponse] as UploadApiResponse[], [
          uploadResponse.secure_url,
        ]);
    } catch (error) {
      onError && onError(error);
    }
  }
  public async uploadFiles(
    files: Promise<Partial<FileUpload>>[],
    options: IFileOptions = fileOptionsDefaults,
  ) {
    const { onSuccess, onError, onCompletion } = options;

    const uploadResponses: UploadApiResponse[] = [];
    const fileUrls: string[] = [];

    (await Promise.all(files)).forEach(async file => {
      try {
        const uploadResponse = await this.uploadFileToCloudinary(file, options);

        uploadResponses.push(uploadResponse);
        fileUrls.push(uploadResponse.secure_url);

        onSuccess && onSuccess(uploadResponse, uploadResponse.secure_url);

        if (fileUrls.length === files.length) {
          onCompletion && onCompletion(uploadResponses, fileUrls);
        }
      } catch (error) {
        onError && onError(error);
      }
    });
  }
}

export default CloudinaryStorageService;
