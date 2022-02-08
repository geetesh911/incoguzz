import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutActivitiesInput } from "../inputs/PostCreateWithoutActivitiesInput";
import { PostUpdateWithoutActivitiesInput } from "../inputs/PostUpdateWithoutActivitiesInput";

@TypeGraphQL.InputType("PostUpsertWithoutActivitiesInput", {
  isAbstract: true,
})
export class PostUpsertWithoutActivitiesInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutActivitiesInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutActivitiesInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutActivitiesInput, {
    nullable: false,
  })
  create!: PostCreateWithoutActivitiesInput;
}
