import { existsSync, unlink } from "fs";
import { injectable } from "tsyringe";

@injectable()
class FileService {
  public async removeFile(path: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (existsSync(path)) {
        unlink(path, err => {
          if (err) reject(err);
          resolve(true);
        });
      } else {
        resolve(false);
      }
    });
  }
}

export default FileService;
