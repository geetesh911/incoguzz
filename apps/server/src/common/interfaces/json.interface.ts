export interface IChunk<T = object> {
  key: string;
  value: T;
}

export enum JsonType {
  object = "object",
  array = "array",
}
