import PaginationInput from "@/common/inputs/pagination.input";

export interface IGetPostParams {
  paginationInput: PaginationInput;
  userId: string;
}

export interface IIncrementPostViewsParams {
  postId: string;
}
