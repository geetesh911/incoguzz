import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutClipInput } from "../inputs/PostCreateOrConnectWithoutClipInput";
import { PostCreateWithoutClipInput } from "../inputs/PostCreateWithoutClipInput";
import { PostUpdateWithoutClipInput } from "../inputs/PostUpdateWithoutClipInput";
import { PostUpsertWithoutClipInput } from "../inputs/PostUpsertWithoutClipInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutClipInput", {
  isAbstract: true,
})
export class PostUpdateOneRequiredWithoutClipInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutClipInput, {
    nullable: true,
  })
  create?: PostCreateWithoutClipInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutClipInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutClipInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutClipInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutClipInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutClipInput, {
    nullable: true,
  })
  update?: PostUpdateWithoutClipInput | undefined;
}
