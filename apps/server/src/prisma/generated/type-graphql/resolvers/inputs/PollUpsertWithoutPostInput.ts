import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateWithoutPostInput } from "../inputs/PollCreateWithoutPostInput";
import { PollUpdateWithoutPostInput } from "../inputs/PollUpdateWithoutPostInput";

@TypeGraphQL.InputType("PollUpsertWithoutPostInput", {
  isAbstract: true,
})
export class PollUpsertWithoutPostInput {
  @TypeGraphQL.Field(_type => PollUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: PollUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => PollCreateWithoutPostInput, {
    nullable: false,
  })
  create!: PollCreateWithoutPostInput;
}
