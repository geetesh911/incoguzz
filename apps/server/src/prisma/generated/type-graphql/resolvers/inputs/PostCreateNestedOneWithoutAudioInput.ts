import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutAudioInput } from "../inputs/PostCreateOrConnectWithoutAudioInput";
import { PostCreateWithoutAudioInput } from "../inputs/PostCreateWithoutAudioInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutAudioInput", {
  isAbstract: true,
})
export class PostCreateNestedOneWithoutAudioInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutAudioInput, {
    nullable: true,
  })
  create?: PostCreateWithoutAudioInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutAudioInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutAudioInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;
}
