import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutBookmarksInput } from "../inputs/PostCreateWithoutBookmarksInput";
import { PostUpdateWithoutBookmarksInput } from "../inputs/PostUpdateWithoutBookmarksInput";

@TypeGraphQL.InputType("PostUpsertWithoutBookmarksInput", {
  isAbstract: true,
})
export class PostUpsertWithoutBookmarksInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutBookmarksInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutBookmarksInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutBookmarksInput, {
    nullable: false,
  })
  create!: PostCreateWithoutBookmarksInput;
}
