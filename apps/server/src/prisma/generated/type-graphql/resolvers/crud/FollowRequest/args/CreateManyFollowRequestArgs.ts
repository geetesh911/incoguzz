import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowRequestCreateManyInput } from "../../../inputs/FollowRequestCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFollowRequestArgs {
  @TypeGraphQL.Field(_type => [FollowRequestCreateManyInput], {
    nullable: false,
  })
  data!: FollowRequestCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
