import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumMessageMediaTypeFilter } from "../inputs/NestedEnumMessageMediaTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { MessageMediaType } from "../../enums/MessageMediaType";

@TypeGraphQL.InputType("NestedEnumMessageMediaTypeWithAggregatesFilter", {
  isAbstract: true,
})
export class NestedEnumMessageMediaTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumMessageMediaTypeWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumMessageMediaTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true,
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMessageMediaTypeFilter, {
    nullable: true,
  })
  _min?: NestedEnumMessageMediaTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMessageMediaTypeFilter, {
    nullable: true,
  })
  _max?: NestedEnumMessageMediaTypeFilter | undefined;
}
