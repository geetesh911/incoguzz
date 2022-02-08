import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipAudioRelationFilter } from "../inputs/ClipAudioRelationFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ClipWhereInput", {
  isAbstract: true,
})
export class ClipWhereInput {
  @TypeGraphQL.Field(_type => [ClipWhereInput], {
    nullable: true,
  })
  AND?: ClipWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipWhereInput], {
    nullable: true,
  })
  OR?: ClipWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipWhereInput], {
    nullable: true,
  })
  NOT?: ClipWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  thumbnailUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ClipAudioRelationFilter, {
    nullable: true,
  })
  clipAudio?: ClipAudioRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  clipAudioId?: StringFilter | undefined;
}
