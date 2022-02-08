import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageMediaType } from "../../enums/MessageMediaType";

@TypeGraphQL.InputType("NestedEnumMessageMediaTypeFilter", {
  isAbstract: true,
})
export class NestedEnumMessageMediaTypeFilter {
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
