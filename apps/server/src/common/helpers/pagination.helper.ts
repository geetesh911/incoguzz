import { injectable } from "tsyringe";
import { IGetCursorParams } from "../interfaces/pagination.interface";

@injectable()
class PaginationHelper {
  public getCursor<TResult>({
    results,
    key,
  }: IGetCursorParams<TResult>): string {
    return results[results?.length - 1][key];
  }
}

export default PaginationHelper;
