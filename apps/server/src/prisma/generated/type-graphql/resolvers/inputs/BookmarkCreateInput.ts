import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutBookmarksInput } from "../inputs/PostCreateNestedOneWithoutBookmarksInput";
import { UserCreateNestedOneWithoutBookmarksInput } from "../inputs/UserCreateNestedOneWithoutBookmarksInput";

@TypeGraphQL.InputType("BookmarkCreateInput", {
  isAbstract: true,
})
export class BookmarkCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutBookmarksInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutBookmarksInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookmarksInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutBookmarksInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;
}
