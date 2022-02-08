import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowRequestCreateManySourceUserInput } from "../inputs/FollowRequestCreateManySourceUserInput";

@TypeGraphQL.InputType("FollowRequestCreateManySourceUserInputEnvelope", {
  isAbstract: true,
})
export class FollowRequestCreateManySourceUserInputEnvelope {
  @TypeGraphQL.Field(_type => [FollowRequestCreateManySourceUserInput], {
    nullable: false,
  })
  data!: FollowRequestCreateManySourceUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
