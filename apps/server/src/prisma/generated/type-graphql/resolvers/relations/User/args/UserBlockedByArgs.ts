import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockedOrderByWithRelationInput } from "../../../inputs/BlockedOrderByWithRelationInput";
import { BlockedWhereInput } from "../../../inputs/BlockedWhereInput";
import { BlockedWhereUniqueInput } from "../../../inputs/BlockedWhereUniqueInput";
import { BlockedScalarFieldEnum } from "../../../../enums/BlockedScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserBlockedByArgs {
  @TypeGraphQL.Field(_type => BlockedWhereInput, {
    nullable: true,
  })
  where?: BlockedWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BlockedOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: BlockedOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BlockedWhereUniqueInput, {
    nullable: true,
  })
  cursor?: BlockedWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [BlockedScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<"id" | "sourceUserId" | "targetUserId" | "createdAt" | "updatedAt">
    | undefined;
}
