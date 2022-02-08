import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowRequestCreateInput } from "../../../inputs/FollowRequestCreateInput";
import { FollowRequestUpdateInput } from "../../../inputs/FollowRequestUpdateInput";
import { FollowRequestWhereUniqueInput } from "../../../inputs/FollowRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertFollowRequestArgs {
  @TypeGraphQL.Field(_type => FollowRequestWhereUniqueInput, {
    nullable: false,
  })
  where!: FollowRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowRequestCreateInput, {
    nullable: false,
  })
  create!: FollowRequestCreateInput;

  @TypeGraphQL.Field(_type => FollowRequestUpdateInput, {
    nullable: false,
  })
  update!: FollowRequestUpdateInput;
}
