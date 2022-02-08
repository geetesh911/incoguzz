import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutVideoInput } from "../inputs/PostCreateOrConnectWithoutVideoInput";
import { PostCreateWithoutVideoInput } from "../inputs/PostCreateWithoutVideoInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutVideoInput", {
  isAbstract: true,
})
export class PostCreateNestedOneWithoutVideoInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutVideoInput, {
    nullable: true,
  })
  create?: PostCreateWithoutVideoInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutVideoInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutVideoInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;
}
