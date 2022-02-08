import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutClipInput } from "../inputs/PostCreateOrConnectWithoutClipInput";
import { PostCreateWithoutClipInput } from "../inputs/PostCreateWithoutClipInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutClipInput", {
  isAbstract: true,
})
export class PostCreateNestedOneWithoutClipInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutClipInput, {
    nullable: true,
  })
  create?: PostCreateWithoutClipInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutClipInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutClipInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;
}
