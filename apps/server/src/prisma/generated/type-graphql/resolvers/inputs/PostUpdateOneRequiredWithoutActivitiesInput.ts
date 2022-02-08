import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutActivitiesInput } from "../inputs/PostCreateOrConnectWithoutActivitiesInput";
import { PostCreateWithoutActivitiesInput } from "../inputs/PostCreateWithoutActivitiesInput";
import { PostUpdateWithoutActivitiesInput } from "../inputs/PostUpdateWithoutActivitiesInput";
import { PostUpsertWithoutActivitiesInput } from "../inputs/PostUpsertWithoutActivitiesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutActivitiesInput", {
  isAbstract: true,
})
export class PostUpdateOneRequiredWithoutActivitiesInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutActivitiesInput, {
    nullable: true,
  })
  create?: PostCreateWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutActivitiesInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutActivitiesInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutActivitiesInput, {
    nullable: true,
  })
  update?: PostUpdateWithoutActivitiesInput | undefined;
}
