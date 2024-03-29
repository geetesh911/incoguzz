import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumPostTypeFilter } from "../inputs/NestedEnumPostTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { PostType } from "../../enums/PostType";

@TypeGraphQL.InputType("NestedEnumPostTypeWithAggregatesFilter", {
  isAbstract: true,
})
export class NestedEnumPostTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => PostType, {
    nullable: true,
  })
  equals?:
    | "POLL"
    | "PHOTO"
    | "VIDEO"
    | "CLIP"
    | "TEXTUAL"
    | "AUDIO"
    | undefined;

  @TypeGraphQL.Field(_type => [PostType], {
    nullable: true,
  })
  in?:
    | Array<"POLL" | "PHOTO" | "VIDEO" | "CLIP" | "TEXTUAL" | "AUDIO">
    | undefined;

  @TypeGraphQL.Field(_type => [PostType], {
    nullable: true,
  })
  notIn?:
    | Array<"POLL" | "PHOTO" | "VIDEO" | "CLIP" | "TEXTUAL" | "AUDIO">
    | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPostTypeWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumPostTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true,
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPostTypeFilter, {
    nullable: true,
  })
  _min?: NestedEnumPostTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumPostTypeFilter, {
    nullable: true,
  })
  _max?: NestedEnumPostTypeFilter | undefined;
}
