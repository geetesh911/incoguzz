import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestWhereInput } from "../inputs/FollowRequestWhereInput";

@TypeGraphQL.InputType("FollowRequestListRelationFilter", {
  isAbstract: true,
})
export class FollowRequestListRelationFilter {
  @TypeGraphQL.Field(_type => FollowRequestWhereInput, {
    nullable: true,
  })
  every?: FollowRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => FollowRequestWhereInput, {
    nullable: true,
  })
  some?: FollowRequestWhereInput | undefined;

  @TypeGraphQL.Field(_type => FollowRequestWhereInput, {
    nullable: true,
  })
  none?: FollowRequestWhereInput | undefined;
}
