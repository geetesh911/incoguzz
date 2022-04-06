import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutBookmarksInput } from "../inputs/PostCreateWithoutBookmarksInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateOrConnectWithoutBookmarksInput", {
  isAbstract: true,
})
export class PostCreateOrConnectWithoutBookmarksInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutBookmarksInput, {
    nullable: false,
  })
  create!: PostCreateWithoutBookmarksInput;
}
