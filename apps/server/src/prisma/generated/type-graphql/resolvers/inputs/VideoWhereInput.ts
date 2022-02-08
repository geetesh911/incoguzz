import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("VideoWhereInput", {
  isAbstract: true,
})
export class VideoWhereInput {
  @TypeGraphQL.Field(_type => [VideoWhereInput], {
    nullable: true,
  })
  AND?: VideoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoWhereInput], {
    nullable: true,
  })
  OR?: VideoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VideoWhereInput], {
    nullable: true,
  })
  NOT?: VideoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  thumbnailUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true,
  })
  post?: PostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  postId?: StringFilter | undefined;
}
