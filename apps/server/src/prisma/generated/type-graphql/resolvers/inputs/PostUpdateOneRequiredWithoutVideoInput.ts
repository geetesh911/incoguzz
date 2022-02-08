import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutVideoInput } from "../inputs/PostCreateOrConnectWithoutVideoInput";
import { PostCreateWithoutVideoInput } from "../inputs/PostCreateWithoutVideoInput";
import { PostUpdateWithoutVideoInput } from "../inputs/PostUpdateWithoutVideoInput";
import { PostUpsertWithoutVideoInput } from "../inputs/PostUpsertWithoutVideoInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutVideoInput", {
  isAbstract: true,
})
export class PostUpdateOneRequiredWithoutVideoInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutVideoInput, {
    nullable: true,
  })
  create?: PostCreateWithoutVideoInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutVideoInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutVideoInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutVideoInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutVideoInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutVideoInput, {
    nullable: true,
  })
  update?: PostUpdateWithoutVideoInput | undefined;
}
