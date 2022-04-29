import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { _id: false } })
export class ProcessedDoc {
  @prop({ unique: true, type: String, required: true })
  public id: string;

  @prop({ type: () => String, default: [] })
  public tokens: string[];
}

export const ProcessedDocModel = getModelForClass(ProcessedDoc);
