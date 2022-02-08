import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ClipScalarWhereInput", {
  isAbstract: true,
})
export class ClipScalarWhereInput {
  @TypeGraphQL.Field(_type => [ClipScalarWhereInput], {
    nullable: true,
  })
  AND?: ClipScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipScalarWhereInput], {
    nullable: true,
  })
  OR?: ClipScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ClipScalarWhereInput], {
    nullable: true,
  })
  NOT?: ClipScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  postId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  thumbnailUrl?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  clipAudioId?: StringFilter | undefined;
}
