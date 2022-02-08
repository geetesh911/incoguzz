import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyPostInput } from "../inputs/MessageCreateManyPostInput";

@TypeGraphQL.InputType("MessageCreateManyPostInputEnvelope", {
  isAbstract: true,
})
export class MessageCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [MessageCreateManyPostInput], {
    nullable: false,
  })
  data!: MessageCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
