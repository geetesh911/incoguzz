import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollOptionOrderByWithRelationInput } from "../inputs/PollOptionOrderByWithRelationInput";
import { PollOrderByWithRelationInput } from "../inputs/PollOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PollAnswerOrderByWithRelationInput", {
  isAbstract: true,
})
export class PollAnswerOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true,
  })
  user?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PollOrderByWithRelationInput, {
    nullable: true,
  })
  poll?: PollOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  pollId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PollOptionOrderByWithRelationInput, {
    nullable: true,
  })
  pollOption?: PollOptionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  pollOptionId?: "asc" | "desc" | undefined;
}
