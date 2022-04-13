import PaginatedResponse from "@/common/generic-types/pagination-response.generic";
import { User } from "@/prisma/generated/type-graphql";
import { Field, ObjectType } from "type-graphql";
import { PostOutput } from "./get-posts.output";

@ObjectType()
export class BookmarkPostOutput {
  @Field(() => String)
  postId: string;

  @Field(() => Boolean)
  bookmarked: boolean;
}
@ObjectType()
class BookmarkOutput {
  @Field(() => String)
  id!: string;

  @Field(() => PostOutput)
  post?: PostOutput;

  @Field(() => String)
  postId!: string;

  user?: User;

  @Field(() => String)
  userId!: string;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;
}

@ObjectType()
class BookmarksOutput extends PaginatedResponse(BookmarkOutput) {}

export default BookmarksOutput;
