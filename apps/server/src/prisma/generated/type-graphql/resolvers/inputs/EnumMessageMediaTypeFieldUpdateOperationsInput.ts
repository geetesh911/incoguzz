import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageMediaType } from "../../enums/MessageMediaType";

@TypeGraphQL.InputType("EnumMessageMediaTypeFieldUpdateOperationsInput", {
  isAbstract: true,
})
export class EnumMessageMediaTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => MessageMediaType, {
    nullable: true,
  })
  set?:
    | "TEXT"
    | "IMAGE"
    | "VIDEO"
    | "AUDIO"
    | "DOCUMENT"
    | "POST"
    | "STORY"
    | undefined;
}
