import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityScalarWhereInput } from "../inputs/ActivityScalarWhereInput";
import { ActivityUpdateManyMutationInput } from "../inputs/ActivityUpdateManyMutationInput";

@TypeGraphQL.InputType("ActivityUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class ActivityUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ActivityScalarWhereInput, {
    nullable: false,
  })
  where!: ActivityScalarWhereInput;

  @TypeGraphQL.Field(_type => ActivityUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ActivityUpdateManyMutationInput;
}
