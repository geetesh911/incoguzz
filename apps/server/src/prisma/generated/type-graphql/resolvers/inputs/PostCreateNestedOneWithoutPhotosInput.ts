import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutPhotosInput } from "../inputs/PostCreateOrConnectWithoutPhotosInput";
import { PostCreateWithoutPhotosInput } from "../inputs/PostCreateWithoutPhotosInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutPhotosInput", {
  isAbstract: true,
})
export class PostCreateNestedOneWithoutPhotosInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutPhotosInput, {
    nullable: true,
  })
  create?: PostCreateWithoutPhotosInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutPhotosInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutPhotosInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;
}
