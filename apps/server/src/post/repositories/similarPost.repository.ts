import { Service } from "typedi";
import {
  IExport,
  ISingleDocumentEntry,
  ITrainedData,
} from "../interfaces/similar-post-recommender.interface";
import { DocVectorModel } from "../models/DocVector";
import { TrainedDataModel } from "../models/TrainedData";
import { ProcessedDocModel } from "../models/ProcessedDoc";

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

@Service()
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
    return TrainedDataModel.find({
      id: { $in: ids },
    }).select(["-_id", "-__v"]);
  }

  public async saveTrainingExportedData(exportedData: IExport) {
    const { trainedData, processedDocs, docVectors } = exportedData;

    await Promise.all([
      await DocVectorModel.insertMany(docVectors),
      await ProcessedDocModel.insertMany(processedDocs),
      await TrainedDataModel.insertMany(trainedData),
    ]);
  }

  public async createNewTrainindDataEntry(
    data: ISingleDocumentEntry,
  ): Promise<void> {
    const { trainedDataEntry, processedDoc, docVector } = data;

    await Promise.all([
      await DocVectorModel.insertMany([docVector]),
      await ProcessedDocModel.insertMany([processedDoc]),
      await TrainedDataModel.insertMany([trainedDataEntry]),
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
}
