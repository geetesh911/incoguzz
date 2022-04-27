import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutActivitiesInput } from "../inputs/UserCreateNestedOneWithoutActivitiesInput";
import { ActivityType } from "../../enums/ActivityType";

@TypeGraphQL.InputType("ActivityCreateWithoutPostInput", {
  isAbstract: true,
})
export class ActivityCreateWithoutPostInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => ActivityType, {
    nullable: false,
  })
  type!:
    | "REACTED"
    | "COMMENTED"
    | "POSTED"
    | "SHARED"
    | "VIEWED"
    | "BOOKMARKED";

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutActivitiesInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutActivitiesInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;
}
