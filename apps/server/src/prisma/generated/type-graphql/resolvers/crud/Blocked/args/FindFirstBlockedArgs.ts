import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockedOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/BlockedOrderByWithRelationAndSearchRelevanceInput";
import { BlockedWhereInput } from "../../../inputs/BlockedWhereInput";
import { BlockedWhereUniqueInput } from "../../../inputs/BlockedWhereUniqueInput";
import { BlockedScalarFieldEnum } from "../../../../enums/BlockedScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstBlockedArgs {
  @TypeGraphQL.Field(_type => BlockedWhereInput, {
    nullable: true,
  })
  where?: BlockedWhereInput | undefined;

  @TypeGraphQL.Field(
    _type => [BlockedOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?: BlockedOrderByWithRelationAndSearchRelevanceInput[] | undefined;

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
