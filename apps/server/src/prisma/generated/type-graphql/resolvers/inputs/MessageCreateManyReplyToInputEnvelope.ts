import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyReplyToInput } from "../inputs/MessageCreateManyReplyToInput";

@TypeGraphQL.InputType("MessageCreateManyReplyToInputEnvelope", {
  isAbstract: true,
})
export class MessageCreateManyReplyToInputEnvelope {
  @TypeGraphQL.Field(_type => [MessageCreateManyReplyToInput], {
    nullable: false,
  })
  data!: MessageCreateManyReplyToInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
