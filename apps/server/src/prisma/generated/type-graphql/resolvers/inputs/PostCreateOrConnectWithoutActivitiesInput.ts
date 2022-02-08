import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutActivitiesInput } from "../inputs/PostCreateWithoutActivitiesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateOrConnectWithoutActivitiesInput", {
  isAbstract: true,
})
export class PostCreateOrConnectWithoutActivitiesInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutActivitiesInput, {
    nullable: false,
  })
  create!: PostCreateWithoutActivitiesInput;
}
