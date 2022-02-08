import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TextualWhereInput", {
  isAbstract: true,
})
export class TextualWhereInput {
  @TypeGraphQL.Field(_type => [TextualWhereInput], {
    nullable: true,
  })
  AND?: TextualWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TextualWhereInput], {
    nullable: true,
  })
  OR?: TextualWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TextualWhereInput], {
    nullable: true,
  })
  NOT?: TextualWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  text?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true,
  })
  post?: PostRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  postId?: StringFilter | undefined;
}
