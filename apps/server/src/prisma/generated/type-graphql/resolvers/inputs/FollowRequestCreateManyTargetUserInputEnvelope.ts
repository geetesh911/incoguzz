import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestCreateManyTargetUserInput } from "../inputs/FollowRequestCreateManyTargetUserInput";

@TypeGraphQL.InputType("FollowRequestCreateManyTargetUserInputEnvelope", {
  isAbstract: true,
})
export class FollowRequestCreateManyTargetUserInputEnvelope {
  @TypeGraphQL.Field(_type => [FollowRequestCreateManyTargetUserInput], {
    nullable: false,
  })
  data!: FollowRequestCreateManyTargetUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
