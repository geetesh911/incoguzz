import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AudioWhereInput", {
  isAbstract: true,
})
export class AudioWhereInput {
  @TypeGraphQL.Field(_type => [AudioWhereInput], {
    nullable: true,
  })
  AND?: AudioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AudioWhereInput], {
    nullable: true,
  })
  OR?: AudioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AudioWhereInput], {
    nullable: true,
  })
  NOT?: AudioWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

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
