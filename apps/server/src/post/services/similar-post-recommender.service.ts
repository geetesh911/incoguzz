import _ from "lodash";
import Vector from "vector-object";
import striptags from "striptags";
import { removeStopwords } from "stopword";
import natural from "natural";
import {
  IData,
  IDocument,
  IOptions,
  IDocumentScore,
  IExport,
  IProcessedDocument,
  IDocumentVector,
  ITrainedData,
  TrainedData,
  ISingleDocumentEntry,
} from "../interfaces/similar-post-recommender.interface";
import { logger } from "@/utils/logger";
import { injectable } from "tsyringe";

const { TfIdf, PorterStemmer, NGrams } = natural;
const tokenizer = new natural.WordTokenizer();

@injectable()
export class SimilarPostsRecommenderService {
  private data: IData = {};
  private trainedData: ITrainedData = [];
  private processedDocs: IProcessedDocument[] = [];
  private docVectors: IDocumentVector[] = [];
  private options: IOptions = {
    maxVectorSize: 100,
    maxSimilarDocs: 100,
    minScore: 0.1,
    debug: true,
  };

  public setOptions(options: IOptions) {
    // validation
    if (
      options.maxVectorSize !== undefined &&
      (!Number.isInteger(options.maxVectorSize) || options.maxVectorSize <= 0)
    )
      throw new Error(
        "The option maxVectorSize should be integer and greater than 0",
      );

    if (
      options.maxSimilarDocs !== undefined &&
      (!Number.isInteger(options.maxSimilarDocs) || options.maxSimilarDocs <= 0)
    )
      throw new Error(
        "The option maxSimilarDocs should be integer and greater than 0",
      );

    if (
      options.minScore !== undefined &&
      (!_.isNumber(options.minScore) ||
        options.minScore < 0 ||
        options.minScore > 1)
    )
      throw new Error("The option minScore should be a number between 0 and 1");

    /**
     * @type {Options}
     * @public
     */
    this.options = { ...this.options, ...options };
  }

  public train(documents: IDocument[]) {
    logger.info(`Training Started`);

    this.validateDocuments(documents);

    if (this.options.debug) logger.info(`Total documents: ${documents.length}`);

    // step 1 - process the documents
    this.processedDocs = this._processDocuments(documents, this.options);

    // step 2 - create document vectors
    this.docVectors = this._produceWordVectors(
      this.processedDocs,
      this.options,
    );

    // step 3 - calculate similarities
    this.trainedData = this._calculateSimilarities(
      this.docVectors,
      this.options,
    );

    logger.info(`Training Completed`);
  }

  public trainWithSingleDoc(document: IDocument): ISingleDocumentEntry {
    logger.info(`Training Started`);

    this.validateDocument(document);

    if (this.options.debug) logger.info(`Total documents: ${document.id}`);

    // step 1 - process the documents
    const processedDoc = this._processDocument(document);

    // step 2 - create document vectors
    const docVector = this._produceWordVector(processedDoc, this.options, true);

    // step 3 - calculate similarities
    const trainedDataEntry = this._calculateSimilarityForSingleDoc(
      this.docVectors,
      docVector,
      this.options,
    );

    logger.info(`Training Completed`);

    return {
      trainedDataEntry,
      docVector,
      processedDoc,
    };
  }

  public trainBidirectional(
    documents: IDocument[],
    targetDocuments: IDocument[],
  ) {
    this.validateDocuments(documents);
    this.validateDocuments(targetDocuments);

    if (this.options.debug) logger.info(`Total documents: ${documents.length}`);

    // step 1 - process the documents
    const processedDocs = this._processDocuments(documents, this.options);
    const preprocessTargetDocs = this._processDocuments(
      targetDocuments,
      this.options,
    );

    // step 2 - create document vectors
    const docVectors = this._produceWordVectors(processedDocs, this.options);
    const targetDocVectors = this._produceWordVectors(
      preprocessTargetDocs,
      this.options,
    );

    // step 3 - calculate similarities
    this.data = this._calculateSimilaritiesBetweenTwoVectors(
      docVectors,
      targetDocVectors,
      this.options,
    );
  }

  public getSimilarDocuments(
    id: string,
    start = 0,
    size: number = undefined,
  ): IDocumentScore[] {
    let similarDocuments = this.data[id];

    if (similarDocuments === undefined) return [];

    const end = size !== undefined ? start + size : undefined;
    similarDocuments = similarDocuments.slice(start, end);

    return similarDocuments;
  }

  public export(): IExport {
    return {
      options: this.options,
      data: this.data,
      trainedData: this.trainedData,
      docVectors: this.docVectors,
      processedDocs: this.processedDocs,
    };
  }

  public import(object: IExport) {
    const { options, data, docVectors, processedDocs, trainedData } = object;

    options && this.setOptions(options);
    this.data = data;
    this.trainedData = trainedData;
    this.docVectors = docVectors;
    this.processedDocs = processedDocs;
  }

  private validateDocument(document: IDocument) {
    if (!_.has(document, "id") || !_.has(document, "content"))
      throw new Error("Documents should be have fields id and content");

    if (_.has(document, "tokens") || _.has(document, "vector"))
      throw new Error(
        '"tokens" and "vector" properties are reserved and cannot be used as document properties"',
      );
  }

  private validateDocuments(documents: IDocument[]) {
    if (!_.isArray(documents))
      throw new Error("Documents should be an array of objects");

    documents.forEach(document => this.validateDocument(document));
  }

  private _processDocument(document: IDocument): IProcessedDocument {
    return {
      id: document.id,
      tokens: this._getTokensFromString(document.content),
    };
  }

  private _processDocuments(
    documents: IDocument[],
    options: IOptions,
  ): IProcessedDocument[] {
    if (options.debug) logger.info("Preprocessing documents");

    return documents.map<IProcessedDocument>(document =>
      this._processDocument(document),
    );
  }

  private _getTokensFromString(content: string): string[] {
    // remove html and to lower case
    const tmpString = striptags(content, [], " ").toLowerCase();

    // tokenize the content
    const tokens = tokenizer.tokenize(tmpString);

    // get unigrams
    const unigrams = removeStopwords(tokens).map(unigram =>
      PorterStemmer.stem(unigram),
    );

    // get bigrams
    const bigrams = NGrams.bigrams(tokens)
      .filter(
        bigram =>
          // filter terms with stopword
          bigram.length === removeStopwords(bigram).length,
      )
      .map(bigram =>
        // stem the tokens
        bigram.map(token => PorterStemmer.stem(token)).join("_"),
      );

    // get trigrams
    const trigrams = NGrams.trigrams(tokens)
      .filter(
        trigram =>
          // filter terms with stopword
          trigram.length === removeStopwords(trigram).length,
      )
      .map(trigram =>
        // stem the tokens
        trigram.map(token => PorterStemmer.stem(token)).join("_"),
      );

    return [].concat(unigrams, bigrams, trigrams);
  }

  private _produceWordVector(
    processedDocument: IProcessedDocument,
    options: IOptions,
    toAddDocInTfidf = false,
    index = 0,
    tfidf = new TfIdf(),
  ): IDocumentVector {
    // process tfidf

    toAddDocInTfidf && tfidf.addDocument(processedDocument.tokens);

    // create word vector
    if (options.debug)
      logger.info(
        `Creating word vector for document ${index || processedDocument?.id}`,
      );

    const hash = {};
    const items = tfidf.listTerms(index);
    const maxSize = Math.min(options.maxVectorSize, items.length);

    for (let i = 0; i < maxSize; i++) {
      const item = items[i];
      hash[item.term] = item.tfidf;
    }

    return {
      id: processedDocument.id,
      vector: new Vector(hash),
    };
  }

  private _produceWordVectors(
    processedDocuments: IProcessedDocument[],
    options: IOptions,
  ): IDocumentVector[] {
    // process tfidf
    const tfidf = new TfIdf();

    processedDocuments.forEach(processedDocument => {
      tfidf.addDocument(processedDocument.tokens);
    });

    // create word vector
    return processedDocuments.map<IDocumentVector>((document, index) =>
      this._produceWordVector(document, options, false, index, tfidf),
    );
  }

  private _calculateSimilaritiesBetweenTwoVectors(
    documentVectors: IDocumentVector[],
    targetDocumentVectors: IDocumentVector[],
    options: IOptions,
  ): IData {
    const data = {
      ...this.initializeDataHash(documentVectors),
      ...this.initializeDataHash(targetDocumentVectors),
    };

    documentVectors?.forEach((documentVectorA, i) => {
      if (options.debug)
        logger.info(`Calculating similarity score for document ${i}`);

      targetDocumentVectors.forEach(targetDocumentVectorB => {
        const idi = documentVectorA.id;
        const vi = documentVectorA.vector;
        const idj = targetDocumentVectorB.id;
        const vj = targetDocumentVectorB.vector;
        const similarity = vi.getCosineSimilarity(vj);

        if (similarity > options.minScore) {
          data[idi].push({
            id: targetDocumentVectorB.id,
            score: similarity,
          });
          data[idj].push({
            id: documentVectorA.id,
            score: similarity,
          });
        }
      });
    });

    this.orderDocuments(data, options);

    return data;
  }

  private initializeDataHash(documentVectors: IDocumentVector[]): IData {
    return documentVectors.reduce((acc, item) => {
      acc[item.id] = [];

      return acc;
    }, {});
  }

  private initializeDataHashAndIndexMap(
    documentVectors: IDocumentVector[],
  ): [ITrainedData, Map<string, number>] {
    const data = [];
    const indexMap = new Map<string, number>();

    documentVectors.forEach((documentVector, index) => {
      indexMap.set(documentVector.id, index);
      data.push({ id: documentVector.id, similarPosts: [] });
    });

    return [data, indexMap];
  }

  private _calculateSimilarities(
    documentVectors: IDocumentVector[],
    options: IOptions,
  ): ITrainedData {
    const [data, indexMap] =
      this.initializeDataHashAndIndexMap(documentVectors);

    // calculate the similar scores
    documentVectors.forEach((documentVectorA, i) => {
      if (options.debug)
        logger.info(`Calculating similarity score for document ${i}`);

      for (let j = 0; j < i; j++) {
        const idi = documentVectorA.id;
        const vi = documentVectorA.vector;
        const documentVectorB = documentVectors[j];
        const idj = documentVectorB.id;
        const vj = documentVectorB.vector;
        const similarity = vi.getCosineSimilarity(vj);

        if (similarity > options.minScore) {
          data[indexMap.get(idi)].similarPosts.push({
            id: documentVectorB.id,
            score: similarity,
          });

          data[indexMap.get(idj)].similarPosts.push({
            id: documentVectorA.id,
            score: similarity,
          });
        }
      }
    });

    this.orderTrainedData(data, options);

    return data;
  }

  private _calculateSimilarityForSingleDoc(
    documentVectors: IDocumentVector[],
    documentVector: IDocumentVector,
    options: IOptions,
  ): TrainedData {
    const data: TrainedData = {
      id: documentVector.id,
      similarPosts: [],
    };

    documentVectors.forEach(documentVectorB => {
      const documentVectorA = documentVector;
      const vi = new Vector(documentVectorA.vector?.vector);
      const vj = new Vector(documentVectorB.vector?.vector);
      const similarity = vi.getCosineSimilarity(vj);

      if (similarity > options.minScore) {
        data.similarPosts.push({
          id: documentVectorB.id,
          score: similarity,
        });
      }
    });

    this.orderTrainedData([data], options);

    return data;
  }

  private orderTrainedData(data: ITrainedData, options: IOptions) {
    // finally sort the similar documents by descending order
    data.forEach(({ similarPosts }, index, arr) => {
      similarPosts.sort((a, b) => b.score - a.score);

      if (similarPosts.length > options.maxSimilarDocs)
        arr[index].similarPosts = similarPosts.slice(0, options.maxSimilarDocs);
    });
  }

  private orderDocuments(data: IData, options: IOptions) {
    // finally sort the similar documents by descending order
    Object.keys(data).forEach(id => {
      data[id].sort((a, b) => b.score - a.score);

      if (data[id].length > options.maxSimilarDocs)
        data[id] = data[id].slice(0, options.maxSimilarDocs);
    });
  }
}
