import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityType } from "../../enums/ActivityType";

@TypeGraphQL.InputType("EnumActivityTypeFieldUpdateOperationsInput", {
  isAbstract: true,
})
export class EnumActivityTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ActivityType, {
    nullable: true,
  })
  set?:
    | "REACTED"
    | "COMMENTED"
    | "POSTED"
    | "SHARED"
    | "VIEWED"
    | "BOOKMARKED"
    | undefined;
}
