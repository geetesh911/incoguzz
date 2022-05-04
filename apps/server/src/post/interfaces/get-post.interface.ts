import PaginationInput from "@/common/inputs/pagination.input";
import { Post } from "@/prisma/generated/type-graphql";

export interface IGetPostParams {
  userId: string;
  postId: string;
}

export interface IGetSimilarPostsParams {
  userId: string;
  postIds: string[];
}

export interface IGetPostsParams {
  paginationInput: PaginationInput;
  userId: string;
}

export interface IGetRelatedPostsParams extends IGetPostsParams {
  postId: string;
}

export interface IGetRelatedPostsRepoParams extends IGetRelatedPostsParams {
  tags: Post["tags"];
  metaTags: Post["metaTags"];
}
