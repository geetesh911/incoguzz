import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutPhotosInput } from "../inputs/PostCreateWithoutPhotosInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateOrConnectWithoutPhotosInput", {
  isAbstract: true,
})
export class PostCreateOrConnectWithoutPhotosInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutPhotosInput, {
    nullable: false,
  })
  create!: PostCreateWithoutPhotosInput;
}
