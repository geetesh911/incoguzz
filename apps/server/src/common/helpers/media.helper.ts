import { Service } from "typedi";

@Service()
class MediaHelper {
  public getFileExtension(filename: string): string {
    return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
  }
}

export default MediaHelper;
