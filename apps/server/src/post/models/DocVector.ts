import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from "@typegoose/typegoose";
import mongoose from "mongoose";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class Vector {
  @prop({ type: () => mongoose.Schema.Types.Mixed })
  vector: mongoose.Schema.Types.Mixed;
}

@modelOptions({ schemaOptions: { _id: false } })
export class DocVector {
  @prop({ unique: true, type: String, required: true })
  public id: string;

  @prop({ type: () => Vector })
  public vector: Vector;
}

export const DocVectorModel = getModelForClass(DocVector);
