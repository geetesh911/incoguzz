import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestUpdateWithoutSourceUserInput } from "../inputs/FollowRequestUpdateWithoutSourceUserInput";
import { FollowRequestWhereUniqueInput } from "../inputs/FollowRequestWhereUniqueInput";

@TypeGraphQL.InputType(
  "FollowRequestUpdateWithWhereUniqueWithoutSourceUserInput",
  {
    isAbstract: true,
  },
)
export class FollowRequestUpdateWithWhereUniqueWithoutSourceUserInput {
  @TypeGraphQL.Field(_type => FollowRequestWhereUniqueInput, {
    nullable: false,
  })
  where!: FollowRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowRequestUpdateWithoutSourceUserInput, {
    nullable: false,
  })
  data!: FollowRequestUpdateWithoutSourceUserInput;
}
