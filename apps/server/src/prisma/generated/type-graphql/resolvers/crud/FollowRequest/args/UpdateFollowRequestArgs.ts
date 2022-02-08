import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowRequestUpdateInput } from "../../../inputs/FollowRequestUpdateInput";
import { FollowRequestWhereUniqueInput } from "../../../inputs/FollowRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateFollowRequestArgs {
  @TypeGraphQL.Field(_type => FollowRequestUpdateInput, {
    nullable: false,
  })
  data!: FollowRequestUpdateInput;

  @TypeGraphQL.Field(_type => FollowRequestWhereUniqueInput, {
    nullable: false,
  })
  where!: FollowRequestWhereUniqueInput;
}
