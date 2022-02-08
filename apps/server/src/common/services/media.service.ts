import { Service } from "typedi";
import ffmpeg, { FfprobeData } from "fluent-ffmpeg";
import { createWriteStream, createReadStream } from "fs";
import { FileUpload } from "graphql-upload";
import { logger } from "@/utils/logger";
import {
  IExtractAudio,
  IExtractAudioOptions,
  IGetVideoThumbnail,
} from "../interfaces/media.interface";
import ffmpegPath from "ffmpeg-static";
import ffprobePath from "ffprobe-static";
import FileService from "./file.service";
import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import jimp from "jimp";
import { JimpConstants } from "../enums/media.enum";

@Service()
class MediaService {
  private static readonly offsets = [1000];
  constructor(private readonly fileService: FileService) {
    ffmpeg.setFfmpegPath(ffmpegPath);
    ffmpeg.setFfprobePath(ffprobePath.path);
  }

  public async extractAudio(
    file: FileUpload,
    options?: IExtractAudioOptions,
  ): Promise<IExtractAudio> {
    return new Promise(async (resolve, reject) => {
      const video = `${file.filename}`;

      file
        .createReadStream()
        .pipe(createWriteStream(`./${video}`))
        .on("error", error => {
          logger.info("Some error occurred in download:" + error);
          reject(error);
        })
        .on("finish", async () => {
          const audio = `${video.split(".")[0]}_audio.mp3`;
          const thumbnail = `${video.split(".")[0]}_thumbnail.jpg`;

          const audioPath = `./${audio}`;
          const videoPath = `./${video}`;
          const thumbanilPath = `./${thumbnail}`;

          const metadata = options.metadata && (await this.getMetadata(video));

          const frameIntervalInSeconds = Math.floor(
            metadata?.format?.duration / 1,
          );

          ffmpeg(`${video}`)
            .on("end", function () {
              console.log("Screenshots taken");
            })
            .on("progress", function (info) {
              console.log("progress " + info.percent + "%");
            })
            .outputOptions([`-vf fps=1/${frameIntervalInSeconds}`])
            .output(thumbanilPath)
            .output(audio)
            .noVideo()
            .format(`mp3`)
            .on("error", err => logger.error(err))
            .on(`end`, async (stdout, stderr) => {
              const audioReadStream = createReadStream(`${audio}`);
              const thumbnailReadStream = createReadStream(thumbanilPath);

              await this.fileService.removeFile(audioPath);
              await this.fileService.removeFile(videoPath);
              await this.fileService.removeFile(thumbanilPath);

              logger.info("File Name: " + metadata?.format?.filename);
              logger.info("Duration: " + metadata?.format?.duration);
              logger.info("Size: " + metadata?.format?.size);
              logger.info(stdout, stderr);

              resolve({
                audioReadStream: () => audioReadStream,
                thumbnailReadStream: () => thumbnailReadStream,
                thumbnailFilename: thumbnail,
                audioFilename: audio,
                metadata,
              });
            })
            .run();
        });
    });
  }

  public whatBitrate(bytes: number): number {
    const ONE_MB = 1000000;
    const BIT = 56; // i found that 28 are good point fell free to change it as you feel right
    const diff = Math.floor(bytes / ONE_MB);
    if (diff < 5) {
      return 256;
    } else {
      return Math.floor(diff * BIT * 1.1);
    }
  }

  public async getVideoThumbnail(
    file: FileUpload,
  ): Promise<IGetVideoThumbnail> {
    return new Promise(async (resolve, reject) => {
      const video = `${file.filename}`;

      file
        .createReadStream()
        .pipe(createWriteStream(`./${video}`))
        .on("error", error => {
          logger.info("Some error occurred in download:" + error);
          reject(error);
        })
        .on("finish", async () => {
          const thumbnail = `${video.split(".")[0]}_thumbnail.jpg`;

          const videoPath = `./${video}`;
          const thumbanilPath = `./${thumbnail}`;

          const metadata = await this.getMetadata(video);

          const frameIntervalInSeconds = Math.floor(
            metadata?.format?.duration / 1,
          );

          ffmpeg(`${video}`)
            .on("end", function () {
              console.log("Screenshots taken");
            })
            .outputOptions([`-vf fps=1/${frameIntervalInSeconds}`])
            .output(thumbanilPath)
            .on("error", err => logger.error(err))
            .on(`end`, async (stdout, stderr) => {
              const thumbnailReadStream = createReadStream(thumbanilPath);

              await this.fileService.removeFile(videoPath);
              await this.fileService.removeFile(thumbanilPath);

              logger.info("File Name: " + metadata?.format?.filename);
              logger.info("Duration: " + metadata?.format?.duration);
              logger.info("Size: " + metadata?.format?.size);
              logger.info(stdout, stderr);

              resolve({
                thumbnailReadStream: () => thumbnailReadStream,
                thumbnailFilename: thumbnail,
                metadata,
              });
            })
            .run();
        });
    });
  }

  public async getMetadata(path: string): Promise<FfprobeData> {
    return new Promise<FfprobeData>((resolveMetadata, rejectMetadata) => {
      ffmpeg(`${path}`).ffprobe((err, data) => {
        if (err) return rejectMetadata(err);
        resolveMetadata(data);
      });
    });
  }
  public async getVideoPreview(
    path: string,
    metadata: FfprobeData,
  ): Promise<any> {
    return new Promise<any>((resolveVideoPreview, rejectVideoPreview) => {
      const frameIntervalInSeconds = Math.floor(
        metadata?.format?.duration / 10,
      );

      ffmpeg(`${path}`)
        .outputOptions([`-vf fps=1/${frameIntervalInSeconds}`])
        .output("./thumb%04d.jpg")
        .on("end", () => resolveVideoPreview(true))
        .on("error", error => rejectVideoPreview(error))
        .run();
    });
  }
  public async getMetadataWithBuffer(file: FileUpload): Promise<FfprobeData> {
    return new Promise(async (resolve, reject) => {
      const video = `${file.filename}`;

      file
        .createReadStream()
        .pipe(createWriteStream(`./${video}`))
        .on("error", error => {
          logger.info("Some error occurred in download:" + error);
          reject(error);
        })
        .on("finish", async () => {
          const metadata = await this.getMetadata(video);

          await this.fileService.removeFile(`./${video}`);
          resolve(metadata);
        });
    });
  }

  public async compressImage(buffer: Buffer): Promise<Buffer> {
    logger.info("compressing Image");
    try {
      return await imagemin.buffer(buffer, {
        plugins: [
          imageminMozjpeg({ quality: 80 }),
          imageminPngquant({ quality: [0.6, 0.8] }),
        ],
      });
    } catch (error) {
      logger.error(error);
      const image = await jimp.read(buffer);

      image.quality(JimpConstants.jimpQuality);
      return image.getBufferAsync(image.getMIME());
    }
  }

  public async compressVideo(file: FileUpload): Promise<Partial<FileUpload>> {
    return new Promise(async (resolve, reject) => {
      const video = `${file.filename}`;

      file
        .createReadStream()
        .pipe(createWriteStream(`./${video}`))
        .on("error", error => {
          logger.info("Some error occurred in download:" + error);
          reject(error);
        })
        .on("finish", async () => {
          const compressedVideo = `compressed_${video}`;
          const compressedVideoPath = `./${compressedVideo}`;
          const videoPath = `./${video}`;

          const metadata = await this.getMetadata(video);
          const bitrate = this.whatBitrate(metadata?.format?.size);

          ffmpeg(`${video}`)
            .outputOptions([
              "-c:v libx264",
              `-b:v ${bitrate}k`,
              "-c:a aac",
              "-b:a 58k",
            ])
            .output(compressedVideoPath)
            .on("start", command => {
              console.log("TCL: command -> command", command);
            })
            .on("end", async () => {
              const compressedVideoReadStream =
                createReadStream(compressedVideo);

              await this.fileService.removeFile(videoPath);
              await this.fileService.removeFile(compressedVideo);

              logger.info("File Name: " + metadata?.format?.filename);
              logger.info("Duration: " + metadata?.format?.duration);
              logger.info("Size: " + metadata?.format?.size);

              resolve({
                createReadStream: () => compressedVideoReadStream,
                filename: compressedVideo,
              });
            })
            .run();
        });
    });
  }
}

export default MediaService;
