import { ReactionType } from "@/prisma/generated/type-graphql";

export interface IPostReactionParams {
  userId: string;
  postId: string;
}

export type IGetPostReactionParams = IPostReactionParams;
export type IDeletePostReactionParams = IPostReactionParams;

export interface IAddPostReactionParams {
  userId: string;
  postId: string;
  reactionType: ReactionType;
}

export interface IUpdatePostReactionParams {
  reactionId: string;
  reactionType: ReactionType;
}
