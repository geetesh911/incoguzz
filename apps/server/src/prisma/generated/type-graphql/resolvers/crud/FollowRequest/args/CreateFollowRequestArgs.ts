import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowRequestCreateInput } from "../../../inputs/FollowRequestCreateInput";

@TypeGraphQL.ArgsType()
export class CreateFollowRequestArgs {
  @TypeGraphQL.Field(_type => FollowRequestCreateInput, {
    nullable: false,
  })
  data!: FollowRequestCreateInput;
}
