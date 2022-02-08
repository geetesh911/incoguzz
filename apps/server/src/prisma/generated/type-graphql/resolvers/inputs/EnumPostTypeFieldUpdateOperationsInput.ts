import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostType } from "../../enums/PostType";

@TypeGraphQL.InputType("EnumPostTypeFieldUpdateOperationsInput", {
  isAbstract: true,
})
export class EnumPostTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => PostType, {
    nullable: true,
  })
  set?: "POLL" | "PHOTO" | "VIDEO" | "CLIP" | "TEXTUAL" | "AUDIO" | undefined;
}
