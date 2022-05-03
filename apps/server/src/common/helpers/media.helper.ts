import { injectable } from "tsyringe";
import {
  optimizedImageExtensions,
  validImageExtensions,
} from "../lists/media.list";

@injectable()
class MediaHelper {
  public getFileExtension(filename: string): string {
    return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
  }
  public getFileName(filename: string): string {
    const extension = this.getFileExtension(filename).toLowerCase();

    return validImageExtensions.includes(extension) &&
      !optimizedImageExtensions.includes(extension)
      ? filename.replace(extension, "png")
      : filename;
  }
}

export default MediaHelper;
