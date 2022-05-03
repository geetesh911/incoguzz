import JSONStream from "JSONStream";
import fs, { ReadStream } from "fs";
import { PassThrough, Readable } from "stream";
import JsonStreamStringify from "json-stream-stringify";
import { IChunk, JsonType } from "../interfaces/json.interface";
import { injectable } from "tsyringe";

@injectable()
export class JsonHelper {
  public parse<T = object>(
    stream: ReadStream | Readable,
    jsonType?: JsonType,
  ): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const accumulator = jsonType === JsonType.array ? [] : {};

      stream
        .pipe(JSONStream.parse("$*"))
        .on("data", (chunk: IChunk<T>) => {
          if (jsonType === JsonType.array && Array.isArray(accumulator)) {
            accumulator?.push(chunk.value);
            return;
          }
          accumulator[chunk.key] = chunk.value;
        })
        .on("end", () => {
          resolve(accumulator as T);
        })
        .on("error", (err: Error) => {
          reject(err);
        });
    });
  }

  public async parseBuffer<T = object>(
    buffer: Buffer | string,
    jsonType?: JsonType,
  ): Promise<T> {
    const stream = new Readable({
      read() {
        this.push(buffer);
        this.push(null);
      },
    });
    return this.parse<T>(stream, jsonType);
  }

  public async parseFs<T = object>(
    filePath: string,
    jsonType?: JsonType,
  ): Promise<T> {
    const stream = fs.createReadStream(filePath, {
      encoding: "utf8",
    });
    return this.parse<T>(stream, jsonType);
  }

  public stringify<T = object>(data: T): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let stringified = "";

      const stringifyStream = new JsonStreamStringify(data, null, null, false);
      const passthroughStream = new PassThrough();

      passthroughStream
        .on("data", (chunk: string) => {
          stringified += chunk;
        })
        .on("end", async () => {
          resolve(stringified);
        })
        .on("error", async err => {
          reject(err);
        });

      stringifyStream.on("error", err => {
        reject(err);
      });

      stringifyStream.pipe(passthroughStream);
    });
  }

  public async stringfyBuffer<T = object>(data: T): Promise<Buffer> {
    const stringified = await this.stringify(data);
    return Buffer.from(stringified);
  }

  public async stringfyFs<T = object>(
    data: T,
    filePath: string,
  ): Promise<void> {
    const stringified = await this.stringify(data);
    await fs.promises.writeFile(filePath, stringified);
  }
}
