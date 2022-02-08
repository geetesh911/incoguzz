import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedWhereInput } from "../inputs/BlockedWhereInput";

@TypeGraphQL.InputType("BlockedListRelationFilter", {
  isAbstract: true,
})
export class BlockedListRelationFilter {
  @TypeGraphQL.Field(_type => BlockedWhereInput, {
    nullable: true,
  })
  every?: BlockedWhereInput | undefined;

  @TypeGraphQL.Field(_type => BlockedWhereInput, {
    nullable: true,
  })
  some?: BlockedWhereInput | undefined;

  @TypeGraphQL.Field(_type => BlockedWhereInput, {
    nullable: true,
  })
  none?: BlockedWhereInput | undefined;
}
