import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

export class SimilarPost {
  @prop({ unique: true, type: String, required: true })
  public id: string;

  @prop({ type: Number, required: true })
  public score: number;
}

@modelOptions({ schemaOptions: { _id: false } })
export class TrainedData {
  @prop({ unique: true, type: String, required: true })
  public id: string;

  @prop({ type: () => SimilarPost, default: [] })
  public similarPosts: SimilarPost[];
}

export const TrainedDataModel = getModelForClass(TrainedData);
