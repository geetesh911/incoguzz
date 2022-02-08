import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedScalarWhereInput } from "../inputs/BlockedScalarWhereInput";
import { BlockedUpdateManyMutationInput } from "../inputs/BlockedUpdateManyMutationInput";

@TypeGraphQL.InputType("BlockedUpdateManyWithWhereWithoutTargetUserInput", {
  isAbstract: true,
})
export class BlockedUpdateManyWithWhereWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => BlockedScalarWhereInput, {
    nullable: false,
  })
  where!: BlockedScalarWhereInput;

  @TypeGraphQL.Field(_type => BlockedUpdateManyMutationInput, {
    nullable: false,
  })
  data!: BlockedUpdateManyMutationInput;
}
