import PaginationInput from "../inputs/pagination.input";
import {
  IGetPagination,
  IPaginationCursor,
} from "../interfaces/repository.interface";

export interface IBaseRepository {
  modelName: string;
}

export type TBaseRepository = IBaseRepository;

abstract class BaseRepository implements TBaseRepository {
  public readonly modelName: string;

  constructor(modelName: string) {
    this.modelName = modelName;
  }

  public getPaginationArgs<T = IPaginationCursor>(
    paginationInput: PaginationInput,
  ): IGetPagination<T> {
    const { take, firstQueryResult, cursor } = paginationInput;

    return {
      take,
      skip: firstQueryResult ? 0 : 1,
      cursor: cursor && ({ id: cursor } as T),
    };
  }
}

export default BaseRepository;
