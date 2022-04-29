export interface IData {
  [key: string]: IDocumentScore[];
}

export interface TrainedData {
  id: string;
  similarPosts: IDocumentScore[];
}
export type ITrainedData = TrainedData[];
/**
 * - Options to create a ContentBasedRecommender
 */
export interface IOptions {
  /**
   * - Max vector size to control the max size of word vector after tf-idf processing. A smaller vector size will help training performance while not affecting recommendation quality. Defaults to be 100
   */
  maxVectorSize: number;
  /**
   * - The minimum score required to meet to consider it is a similar document. It will save more memory by filtering out documents having low scores. Allowed values range from 0 to 1. Default is 0
   */
  minScore: number;
  /**
   * - The maximum number of similar documents to keep for each document. Default is the max safe integer in javascript
   */
  maxSimilarDocs: number;
  /**
   * - Show progress messages so can monitor the training progress
   */
  debug: boolean;
}

export interface IDocument {
  id: string;
  content: string;
}
export interface IDocumentScore {
  id: string;
  score: number;
}
export interface IExport {
  data: IData;
  trainedData: ITrainedData;
  processedDocs: IProcessedDocument[];
  docVectors: IDocumentVector[];
  options?: IOptions;
}
export interface IProcessedDocument {
  /**
   * - document id
   */
  id: string;
  /**
   * - tokens from the content of the document (keywords)
   */
  tokens: string[];
}
export interface IDocumentVector {
  id: string;
  vector: any;
}

export interface ISingleDocumentEntry {
  trainedDataEntry: TrainedData;
  docVector: IDocumentVector;
  processedDoc: IProcessedDocument;
}
