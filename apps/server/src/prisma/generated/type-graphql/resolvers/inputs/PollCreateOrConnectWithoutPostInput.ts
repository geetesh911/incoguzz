import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateWithoutPostInput } from "../inputs/PollCreateWithoutPostInput";
import { PollWhereUniqueInput } from "../inputs/PollWhereUniqueInput";

@TypeGraphQL.InputType("PollCreateOrConnectWithoutPostInput", {
  isAbstract: true,
})
export class PollCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => PollWhereUniqueInput, {
    nullable: false,
  })
  where!: PollWhereUniqueInput;

  @TypeGraphQL.Field(_type => PollCreateWithoutPostInput, {
    nullable: false,
  })
  create!: PollCreateWithoutPostInput;
}
