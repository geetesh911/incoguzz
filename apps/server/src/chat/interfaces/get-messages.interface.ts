import PaginationInput from "@/common/inputs/pagination.input";

export interface IGetMessagesParams {
  sourceUserId: string;
  targetUserId: string;
  paginationInput: PaginationInput;
}
