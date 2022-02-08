import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Poll } from "../models/Poll";
import { PollOption } from "../models/PollOption";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("PollAnswer", {
  isAbstract: true,
})
export class PollAnswer {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;

  poll?: Poll;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  pollId!: string;

  pollOption?: PollOption;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  pollOptionId!: string;
}
