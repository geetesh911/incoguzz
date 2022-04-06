import PaginationOutput from "@/common/outputs/pagination.output";
import { User } from "@/prisma/generated/type-graphql";
import { Field, ObjectType } from "type-graphql";
import { PostOutput } from "./get-posts.output";

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
class BookmarksOutput {
  @Field(() => [BookmarkOutput])
  bookmarks: BookmarkOutput[];

  @Field(() => PaginationOutput)
  pagination: PaginationOutput;
}

export default BookmarksOutput;
