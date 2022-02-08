import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowRequestWhereInput } from "../../../inputs/FollowRequestWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFollowRequestArgs {
  @TypeGraphQL.Field(_type => FollowRequestWhereInput, {
    nullable: true,
  })
  where?: FollowRequestWhereInput | undefined;
}
