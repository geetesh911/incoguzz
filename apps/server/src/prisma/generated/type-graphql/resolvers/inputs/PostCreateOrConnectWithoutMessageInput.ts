import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutMessageInput } from "../inputs/PostCreateWithoutMessageInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateOrConnectWithoutMessageInput", {
  isAbstract: true,
})
export class PostCreateOrConnectWithoutMessageInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutMessageInput, {
    nullable: false,
  })
  create!: PostCreateWithoutMessageInput;
}
