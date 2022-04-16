import { Service } from "typedi";
import { optimizedImageExtensions } from "../lists/media.list";

@Service()
class MediaHelper {
  public getFileExtension(filename: string): string {
    return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
  }
  public getFileName(filename: string): string {
    const extension = this.getFileExtension(filename);

    return !optimizedImageExtensions.includes(extension.toLowerCase())
      ? filename.replace(extension, "png")
      : filename;
  }
}

export default MediaHelper;
