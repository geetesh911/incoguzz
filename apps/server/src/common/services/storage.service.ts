import { AzureContainersEnum } from "@/user/enums/file.enum";
import { FileUpload } from "graphql-upload";
import { Service } from "typedi";
import { fileOptionsDefaults } from "../defaults/azure-storage.defaults";
import { IFileOptions } from "../interfaces/storage.interface";
import AzureStorageService from "./azure-storage.service";
import CloudinaryStorageService from "./cloudinary-storage.service";

@Service()
class StorageService {
  constructor(
    private readonly azureStorageService: AzureStorageService,
    private readonly cloudinaryStorageService: CloudinaryStorageService,
  ) {}
  public async uploadFile(
    file: Partial<FileUpload>,
    options: IFileOptions = fileOptionsDefaults,
  ): Promise<void> {
    this.cloudinaryStorageService.uploadFile(file, options);
  }
  public async uploadFiles(
    files: Promise<Partial<FileUpload>>[],
    options: IFileOptions = fileOptionsDefaults,
  ): Promise<void> {
    this.cloudinaryStorageService.uploadFiles(files, options);
  }
  public async deleteFileFromAzure(
    filename: string,
    containerName: AzureContainersEnum = AzureContainersEnum.misc,
  ): Promise<boolean> {
    return this.azureStorageService.deleteFileFromAzure(
      filename,
      containerName,
    );
  }
}

export default StorageService;
