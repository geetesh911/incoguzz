import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowRequestUpdateManyMutationInput } from "../../../inputs/FollowRequestUpdateManyMutationInput";
import { FollowRequestWhereInput } from "../../../inputs/FollowRequestWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFollowRequestArgs {
  @TypeGraphQL.Field(_type => FollowRequestUpdateManyMutationInput, {
    nullable: false,
  })
  data!: FollowRequestUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FollowRequestWhereInput, {
    nullable: true,
  })
  where?: FollowRequestWhereInput | undefined;
}
