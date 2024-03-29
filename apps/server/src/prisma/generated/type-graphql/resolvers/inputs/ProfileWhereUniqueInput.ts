import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ProfileWhereUniqueInput", {
  isAbstract: true,
})
export class ProfileWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  mobileNo?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  userId?: string | undefined;
}
