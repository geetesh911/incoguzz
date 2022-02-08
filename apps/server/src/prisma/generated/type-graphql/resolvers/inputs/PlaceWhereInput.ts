import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PlaceWhereInput", {
  isAbstract: true,
})
export class PlaceWhereInput {
  @TypeGraphQL.Field(_type => [PlaceWhereInput], {
    nullable: true,
  })
  AND?: PlaceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaceWhereInput], {
    nullable: true,
  })
  OR?: PlaceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaceWhereInput], {
    nullable: true,
  })
  NOT?: PlaceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  address?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true,
  })
  posts?: PostListRelationFilter | undefined;
}
