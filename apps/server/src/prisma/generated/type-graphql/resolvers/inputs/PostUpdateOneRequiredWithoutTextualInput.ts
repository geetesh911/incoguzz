import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutTextualInput } from "../inputs/PostCreateOrConnectWithoutTextualInput";
import { PostCreateWithoutTextualInput } from "../inputs/PostCreateWithoutTextualInput";
import { PostUpdateWithoutTextualInput } from "../inputs/PostUpdateWithoutTextualInput";
import { PostUpsertWithoutTextualInput } from "../inputs/PostUpsertWithoutTextualInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutTextualInput", {
  isAbstract: true,
})
export class PostUpdateOneRequiredWithoutTextualInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutTextualInput, {
    nullable: true,
  })
  create?: PostCreateWithoutTextualInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutTextualInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutTextualInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutTextualInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutTextualInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutTextualInput, {
    nullable: true,
  })
  update?: PostUpdateWithoutTextualInput | undefined;
}
