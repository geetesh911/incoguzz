import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManyStoryInput } from "../inputs/MessageCreateManyStoryInput";

@TypeGraphQL.InputType("MessageCreateManyStoryInputEnvelope", {
  isAbstract: true,
})
export class MessageCreateManyStoryInputEnvelope {
  @TypeGraphQL.Field(_type => [MessageCreateManyStoryInput], {
    nullable: false,
  })
  data!: MessageCreateManyStoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
