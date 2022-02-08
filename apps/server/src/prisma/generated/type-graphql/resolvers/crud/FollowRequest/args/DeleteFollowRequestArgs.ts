import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowRequestWhereUniqueInput } from "../../../inputs/FollowRequestWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteFollowRequestArgs {
  @TypeGraphQL.Field(_type => FollowRequestWhereUniqueInput, {
    nullable: false,
  })
  where!: FollowRequestWhereUniqueInput;
}
