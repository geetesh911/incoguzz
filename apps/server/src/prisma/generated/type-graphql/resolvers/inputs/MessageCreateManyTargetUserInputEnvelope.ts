import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyTargetUserInput } from "../inputs/MessageCreateManyTargetUserInput";

@TypeGraphQL.InputType("MessageCreateManyTargetUserInputEnvelope", {
  isAbstract: true,
})
export class MessageCreateManyTargetUserInputEnvelope {
  @TypeGraphQL.Field(_type => [MessageCreateManyTargetUserInput], {
    nullable: false,
  })
  data!: MessageCreateManyTargetUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
