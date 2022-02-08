import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumMessageMediaTypeFilter } from "../inputs/NestedEnumMessageMediaTypeFilter";
import { MessageMediaType } from "../../enums/MessageMediaType";

@TypeGraphQL.InputType("EnumMessageMediaTypeFilter", {
  isAbstract: true,
})
export class EnumMessageMediaTypeFilter {
  @TypeGraphQL.Field(_type => MessageMediaType, {
    nullable: true,
  })
  equals?:
    | "TEXT"
    | "IMAGE"
    | "VIDEO"
    | "AUDIO"
    | "DOCUMENT"
    | "POST"
    | "STORY"
    | undefined;

  @TypeGraphQL.Field(_type => [MessageMediaType], {
    nullable: true,
  })
  in?:
    | Array<
        "TEXT" | "IMAGE" | "VIDEO" | "AUDIO" | "DOCUMENT" | "POST" | "STORY"
      >
    | undefined;

  @TypeGraphQL.Field(_type => [MessageMediaType], {
    nullable: true,
  })
  notIn?:
    | Array<
        "TEXT" | "IMAGE" | "VIDEO" | "AUDIO" | "DOCUMENT" | "POST" | "STORY"
      >
    | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMessageMediaTypeFilter, {
    nullable: true,
  })
  not?: NestedEnumMessageMediaTypeFilter | undefined;
}
