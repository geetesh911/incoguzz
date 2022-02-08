import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedCreateManySourceUserInput } from "../inputs/BlockedCreateManySourceUserInput";

@TypeGraphQL.InputType("BlockedCreateManySourceUserInputEnvelope", {
  isAbstract: true,
})
export class BlockedCreateManySourceUserInputEnvelope {
  @TypeGraphQL.Field(_type => [BlockedCreateManySourceUserInput], {
    nullable: false,
  })
  data!: BlockedCreateManySourceUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
