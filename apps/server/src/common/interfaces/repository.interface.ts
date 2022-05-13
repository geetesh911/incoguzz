export interface IPaginationCursor {
  id: string;
}
export interface IGetPagination<T = IPaginationCursor> {
  take: number;
  skip: number;
  cursor: T;
}
