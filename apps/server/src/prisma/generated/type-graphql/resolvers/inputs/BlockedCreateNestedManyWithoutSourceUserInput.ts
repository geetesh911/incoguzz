import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedCreateManySourceUserInputEnvelope } from "../inputs/BlockedCreateManySourceUserInputEnvelope";
import { BlockedCreateOrConnectWithoutSourceUserInput } from "../inputs/BlockedCreateOrConnectWithoutSourceUserInput";
import { BlockedCreateWithoutSourceUserInput } from "../inputs/BlockedCreateWithoutSourceUserInput";
import { BlockedWhereUniqueInput } from "../inputs/BlockedWhereUniqueInput";

@TypeGraphQL.InputType("BlockedCreateNestedManyWithoutSourceUserInput", {
  isAbstract: true,
})
export class BlockedCreateNestedManyWithoutSourceUserInput {
  @TypeGraphQL.Field(_type => [BlockedCreateWithoutSourceUserInput], {
    nullable: true,
  })
  create?: BlockedCreateWithoutSourceUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockedCreateOrConnectWithoutSourceUserInput], {
    nullable: true,
  })
  connectOrCreate?: BlockedCreateOrConnectWithoutSourceUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BlockedCreateManySourceUserInputEnvelope, {
    nullable: true,
  })
  createMany?: BlockedCreateManySourceUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BlockedWhereUniqueInput], {
    nullable: true,
  })
  connect?: BlockedWhereUniqueInput[] | undefined;
}
