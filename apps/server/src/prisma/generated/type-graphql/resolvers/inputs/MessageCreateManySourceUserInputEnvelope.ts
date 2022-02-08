import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManySourceUserInput } from "../inputs/MessageCreateManySourceUserInput";

@TypeGraphQL.InputType("MessageCreateManySourceUserInputEnvelope", {
  isAbstract: true,
})
export class MessageCreateManySourceUserInputEnvelope {
  @TypeGraphQL.Field(_type => [MessageCreateManySourceUserInput], {
    nullable: false,
  })
  data!: MessageCreateManySourceUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
