import { ReactionType } from "@/prisma/generated/type-graphql";

export interface IAddPostReactionParams {
  userId: string;
  postId?: string;
  reactionType: ReactionType;
}

export interface IUpdatePostReactionParams {
  reactionId: string;
  reactionType: ReactionType;
}
