import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestCreateWithoutSourceUserInput } from "../inputs/FollowRequestCreateWithoutSourceUserInput";
import { FollowRequestUpdateWithoutSourceUserInput } from "../inputs/FollowRequestUpdateWithoutSourceUserInput";
import { FollowRequestWhereUniqueInput } from "../inputs/FollowRequestWhereUniqueInput";

@TypeGraphQL.InputType(
  "FollowRequestUpsertWithWhereUniqueWithoutSourceUserInput",
  {
    isAbstract: true,
  },
)
export class FollowRequestUpsertWithWhereUniqueWithoutSourceUserInput {
  @TypeGraphQL.Field(_type => FollowRequestWhereUniqueInput, {
    nullable: false,
  })
  where!: FollowRequestWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowRequestUpdateWithoutSourceUserInput, {
    nullable: false,
  })
  update!: FollowRequestUpdateWithoutSourceUserInput;

  @TypeGraphQL.Field(_type => FollowRequestCreateWithoutSourceUserInput, {
    nullable: false,
  })
  create!: FollowRequestCreateWithoutSourceUserInput;
}
