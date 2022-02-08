import { IFileOptions } from "../interfaces/storage.interface";

export const fileOptionsDefaults: IFileOptions = {
  folder: "",
  onSuccess: () => null,
  onCompletion: () => null,
  onError: () => null,
};
