import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tfnode from "@tensorflow/tfjs-node";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import path from "path";
import { injectable } from "tsyringe";

@injectable()
export class ImageClassificationService {
  mobilenetModel: mobilenet.MobileNet | undefined;
  cocoSsdModel: cocoSsd.ObjectDetection | undefined;

  public async loadCocoSsdModel() {
    if (this.cocoSsdModel) {
      return this.cocoSsdModel;
    }

    this.cocoSsdModel = await cocoSsd.load();

    return this.cocoSsdModel;
  }

  public async loadModel() {
    if (this.mobilenetModel) {
      return this.mobilenetModel;
    }

    const customModelUrl = `file://${path.resolve(
      __dirname,
      "../static",
    )}/model.json`;

    this.mobilenetModel = await mobilenet.load({
      version: 2,
      alpha: 1.0,
      modelUrl: customModelUrl || undefined,
    });
    return this.mobilenetModel;
  }

  public async classify(imageBuffer: Buffer, topk = 3) {
    if (!this.mobilenetModel) {
      await this.loadModel();
    }

    const tfimage = tfnode.node.decodeImage(imageBuffer) as tfnode.Tensor3D;
    return this.mobilenetModel?.classify(tfimage, topk);
  }

  public async detectObject(imageBuffer: Buffer) {
    if (!this.cocoSsdModel) {
      await this.loadCocoSsdModel();
    }

    const tfimage = tfnode.node.decodeImage(imageBuffer) as tfnode.Tensor3D;
    return this.cocoSsdModel?.detect(tfimage);
  }
}
