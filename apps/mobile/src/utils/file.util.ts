import { ReactNativeFile } from "apollo-upload-client";
import * as mime from "react-native-mime-types";

interface IGenerateRNFileParams {
  uri: string;
  name: string;
  type?: string;
}

export class FileUtil {
  static generateRNFile({ uri, name, type }: IGenerateRNFileParams) {
    return uri
      ? new ReactNativeFile({
          uri,
          name,
          type: mime.lookup(uri) || type || "image",
        })
      : null;
  }
}
