import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowingOrderByWithRelationInput } from "../../../inputs/FollowingOrderByWithRelationInput";
import { FollowingWhereInput } from "../../../inputs/FollowingWhereInput";
import { FollowingWhereUniqueInput } from "../../../inputs/FollowingWhereUniqueInput";
import { FollowingScalarFieldEnum } from "../../../../enums/FollowingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserFollowingsArgs {
  @TypeGraphQL.Field(_type => FollowingWhereInput, {
    nullable: true,
  })
  where?: FollowingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FollowingOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: FollowingOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FollowingWhereUniqueInput, {
    nullable: true,
  })
  cursor?: FollowingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [FollowingScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "userId" | "createdAt" | "updatedAt"> | undefined;
}
