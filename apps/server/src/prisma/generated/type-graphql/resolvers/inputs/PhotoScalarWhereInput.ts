import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("PhotoScalarWhereInput", {
  isAbstract: true,
})
export class PhotoScalarWhereInput {
  @TypeGraphQL.Field(_type => [PhotoScalarWhereInput], {
    nullable: true,
  })
  AND?: PhotoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoScalarWhereInput], {
    nullable: true,
  })
  OR?: PhotoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoScalarWhereInput], {
    nullable: true,
  })
  NOT?: PhotoScalarWhereInput[] | undefined;

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
}
