import config from "@/configs";
import { injectable } from "tsyringe";

@injectable()
class AzureStorageHelper {
  public getFileAndContainerNameFromUrl(url: string): string[] {
    // https://incoguzz.blob.core.windows.net/profile/62f3589a-585d-4e14-a4a6-48a6b6adfa44_result image.png
    const baseUrl = config.get("azure.imagesBaseUrl");
    return url.split(`${baseUrl}/`)[1].split("/");
  }
}

export default AzureStorageHelper;
