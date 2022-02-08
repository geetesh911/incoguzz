import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedCreateManyTargetUserInput } from "../inputs/BlockedCreateManyTargetUserInput";

@TypeGraphQL.InputType("BlockedCreateManyTargetUserInputEnvelope", {
  isAbstract: true,
})
export class BlockedCreateManyTargetUserInputEnvelope {
  @TypeGraphQL.Field(_type => [BlockedCreateManyTargetUserInput], {
    nullable: false,
  })
  data!: BlockedCreateManyTargetUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
