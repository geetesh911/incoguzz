import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutActivitiesInput } from "../inputs/PostCreateOrConnectWithoutActivitiesInput";
import { PostCreateWithoutActivitiesInput } from "../inputs/PostCreateWithoutActivitiesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutActivitiesInput", {
  isAbstract: true,
})
export class PostCreateNestedOneWithoutActivitiesInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutActivitiesInput, {
    nullable: true,
  })
  create?: PostCreateWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutActivitiesInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;
}
