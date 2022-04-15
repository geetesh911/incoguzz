import { Service } from "typedi";
import {
  AccountSASPermissions,
  AccountSASResourceTypes,
  AccountSASServices,
  BlobServiceClient,
  generateAccountSASQueryParameters,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";
import config from "@/configs";
import { FileUpload } from "graphql-upload";
import {
  IBlobUploadCommonResponse,
  IFileOptions,
} from "../interfaces/storage.interface";
import { fileOptionsDefaults } from "../defaults/azure-storage.defaults";
import DateHelper from "../helpers/date.helper";
import { nanoid } from "nanoid";
import { AzureContainersEnum } from "@/user/enums/file.enum";
import MediaHelper from "../helpers/media.helper";
import { optimizeImageExtensions } from "../lists/media.list";
import MediaService from "./media.service";
import { ImageClassificationService } from "./image-classification.service";

@Service()
class AzureStorageService {
  private readonly blobServiceClient = BlobServiceClient.fromConnectionString(
    config.get("azure.azureConnectionString"),
  );
  private readonly sharedKeyCredential = new StorageSharedKeyCredential(
    config.get("azure.storageAccountName"),
    config.get("azure.storageSharedKey"),
  );

  constructor(
    private readonly dateHelper: DateHelper,
    private readonly mediaHelper: MediaHelper,
    private readonly mediaService: MediaService,
    private readonly imageClassificationService: ImageClassificationService,
  ) {}

  private async uploadFileToAzure(
    file: string | Buffer,
    filename: string,
    containerName: AzureContainersEnum = AzureContainersEnum.misc,
    folder = "",
  ): Promise<IBlobUploadCommonResponse> {
    const extension = this.mediaHelper.getFileExtension(filename);

    let metadata: string[] = [];
    if (optimizeImageExtensions.includes(extension)) {
      file = await this.mediaService.compressImage(file as Buffer);
      metadata = await this.mediaService.getMetaTags(file, extension);
    }

    const containerClient =
      this.blobServiceClient.getContainerClient(containerName);

    await containerClient.createIfNotExists();

    const folderPath = folder ? `${folder}/` : "";

    const blobName = `${folderPath}${nanoid()}_${filename}`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    const uploadResponse = await blockBlobClient.uploadData(file as Buffer, {
      concurrency: 200,
    });

    return { ...uploadResponse, filename: blobName, metadata };
  }

  public async deleteFileFromAzure(
    filename: string,
    containerName: AzureContainersEnum = AzureContainersEnum.misc,
  ): Promise<boolean> {
    const containerClient =
      this.blobServiceClient.getContainerClient(containerName);

    const blobName = filename;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    await blockBlobClient.deleteIfExists();
    return true;
  }

  public async generateQueryParams(): Promise<string> {
    const accountSASPermissions = new AccountSASPermissions();
    accountSASPermissions.read = true;

    const accountSASServices = new AccountSASServices();
    accountSASServices.blob = true;

    const accountSASResourceTypes = new AccountSASResourceTypes();
    accountSASResourceTypes.container = true;
    accountSASResourceTypes.object = true;

    return generateAccountSASQueryParameters(
      {
        resourceTypes: accountSASResourceTypes.toString(),
        services: accountSASServices.toString(),
        permissions: accountSASPermissions,
        expiresOn: this.dateHelper.getFutureDate({ month: 1 }),
      },
      this.sharedKeyCredential,
    ).toString();
  }

  public createFileUrl(containerName: AzureContainersEnum, filename: string) {
    const fileFolder = containerName;
    const filesBaseUrl = config.get("azure.imagesBaseUrl");

    return `${filesBaseUrl}/${fileFolder}/${filename}`;
  }

  public async uploadFile(
    { createReadStream, filename }: Partial<FileUpload>,
    options: IFileOptions = fileOptionsDefaults,
  ): Promise<void> {
    const { folder, containerName, onSuccess, onError, onCompletion } = options;
    const buffer = [];
    createReadStream()
      .on("data", async data => {
        buffer.push(data);
      })
      .on("end", async () => {
        const combinedBuffer = Buffer.concat(buffer);

        const uploadResponse = await this.uploadFileToAzure(
          combinedBuffer,
          filename,
          containerName,
          folder,
        );

        const fileUrl = this.createFileUrl(
          containerName,
          uploadResponse.filename,
        );

        onSuccess?.(uploadResponse, fileUrl);
        onCompletion?.([uploadResponse], [fileUrl]);
      })
      .on("error", (err: Error) => onError?.(err));
  }

  public async uploadFiles(
    files: Promise<Partial<FileUpload>>[],
    options: IFileOptions = fileOptionsDefaults,
  ): Promise<void> {
    const { folder, containerName, onSuccess, onError, onCompletion } = options;

    const uploadResponses: IBlobUploadCommonResponse[] = [];
    const fileUrls: string[] = [];

    (await Promise.all(files)).forEach(
      ({ createReadStream, filename }: FileUpload) => {
        const buffer = [];
        createReadStream()
          .on("data", async data => {
            buffer.push(data);
          })
          .on("end", async () => {
            const combinedBuffer = Buffer.concat(buffer);
            const uploadResponse = await this.uploadFileToAzure(
              combinedBuffer,
              filename,
              containerName,
              folder,
            );

            const fileUrl = this.createFileUrl(
              containerName,
              uploadResponse.filename,
            );

            onSuccess?.(uploadResponse, fileUrl);

            uploadResponses.push(uploadResponse);
            fileUrls.push(fileUrl);

            if (fileUrls.length === files.length) {
              onCompletion?.(uploadResponses, fileUrls);
            }
          })
          .on("error", (err: Error) => onError?.(err));
      },
    );
  }
}
export default AzureStorageService;
