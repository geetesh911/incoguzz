export interface IBaseRepository {
  modelName: string;
}

export type TBaseRepository = IBaseRepository;

abstract class BaseRepository implements TBaseRepository {
  public readonly modelName: string;

  constructor(modelName: string) {
    this.modelName = modelName;
  }
}

export default BaseRepository;
