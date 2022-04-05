import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutActivitiesInput } from "../inputs/PostCreateNestedOneWithoutActivitiesInput";
import { ActivityType } from "../../enums/ActivityType";

@TypeGraphQL.InputType("ActivityCreateWithoutUserInput", {
  isAbstract: true,
})
export class ActivityCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => ActivityType, {
    nullable: false,
  })
  type!: "LIKED" | "COMMENTED" | "POSTED" | "SHARED";

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutActivitiesInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutActivitiesInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;
}
