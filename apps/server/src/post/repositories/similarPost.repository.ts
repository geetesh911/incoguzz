import {
  IExport,
  ISingleDocumentEntry,
  ITrainedData,
  TrainedData,
} from "../interfaces/similar-post-recommender.interface";
import { DocVectorModel } from "../models/DocVector";
import { TrainedDataModel } from "../models/TrainedData";
import { ProcessedDocModel } from "../models/ProcessedDoc";
import { injectable } from "tsyringe";

interface IReader {
  getTrainingData: () => Promise<IExport>;
  getTrainingDataEntries: (ids: string[]) => Promise<ITrainedData>;
}

interface IWriter {
  saveTrainingExportedData: (exportedData: IExport) => Promise<void>;
  createNewTrainindDataEntry: (data: ISingleDocumentEntry) => Promise<void>;
  updateExistingEntries: (updatedEntries: ITrainedData) => Promise<void>;
}

type TSimilarPostRepository = IReader & IWriter;

@injectable()
export class SimilarPostRepository implements TSimilarPostRepository {
  public async getTrainingData(): Promise<IExport> {
    const [docVectors, processedDocs, trainedData] = await Promise.all([
      DocVectorModel.find({}),
      ProcessedDocModel.find({}),
      TrainedDataModel.find({}),
    ]);

    return {
      data: {},
      trainedData,
      processedDocs,
      docVectors,
    };
  }

  public async getTrainingDataEntries(ids: string[]): Promise<ITrainedData> {
    return TrainedDataModel.find()
      .where({ id: { $in: ids } })
      .select(["-_id", "-__v"]);
  }

  public async getTrainingDataEntry(id: string): Promise<TrainedData> {
    return TrainedDataModel.findOne().where({ id }).select(["-_id", "-__v"]);
  }

  public async saveTrainingExportedData(exportedData: IExport) {
    const { trainedData, processedDocs, docVectors } = exportedData;

    await Promise.all([
      DocVectorModel.insertMany(docVectors),
      ProcessedDocModel.insertMany(processedDocs),
      TrainedDataModel.insertMany(trainedData),
    ]);
  }

  public async createNewTrainindDataEntry(
    data: ISingleDocumentEntry,
  ): Promise<void> {
    const { trainedDataEntry, processedDoc, docVector } = data;

    await Promise.all([
      DocVectorModel.insertMany([docVector]),
      ProcessedDocModel.insertMany([processedDoc]),
      TrainedDataModel.insertMany([trainedDataEntry]),
    ]);
  }

  public async updateExistingEntries(
    updatedEntries: ITrainedData,
  ): Promise<void> {
    await Promise.all(
      updatedEntries.map(entry =>
        TrainedDataModel.updateOne(
          { id: entry.id },
          { similarPosts: entry.similarPosts },
        ),
      ),
    );
  }

  public async deleteEntry(id: string) {
    const [docVector, processedDoc, trainedData] = await Promise.all([
      DocVectorModel.findOneAndDelete({ id }),
      ProcessedDocModel.findOneAndDelete({ id }),
      TrainedDataModel.findOneAndDelete({ id }),
    ]);
    return { docVector, processedDoc, trainedData };
  }
}
