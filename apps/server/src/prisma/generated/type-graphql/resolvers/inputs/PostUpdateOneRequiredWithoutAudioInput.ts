import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutAudioInput } from "../inputs/PostCreateOrConnectWithoutAudioInput";
import { PostCreateWithoutAudioInput } from "../inputs/PostCreateWithoutAudioInput";
import { PostUpdateWithoutAudioInput } from "../inputs/PostUpdateWithoutAudioInput";
import { PostUpsertWithoutAudioInput } from "../inputs/PostUpsertWithoutAudioInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutAudioInput", {
  isAbstract: true,
})
export class PostUpdateOneRequiredWithoutAudioInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutAudioInput, {
    nullable: true,
  })
  create?: PostCreateWithoutAudioInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutAudioInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutAudioInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutAudioInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutAudioInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutAudioInput, {
    nullable: true,
  })
  update?: PostUpdateWithoutAudioInput | undefined;
}
