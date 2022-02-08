import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutMessageInput } from "../inputs/PostCreateOrConnectWithoutMessageInput";
import { PostCreateWithoutMessageInput } from "../inputs/PostCreateWithoutMessageInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutMessageInput", {
  isAbstract: true,
})
export class PostCreateNestedOneWithoutMessageInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutMessageInput, {
    nullable: true,
  })
  create?: PostCreateWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutMessageInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;
}
