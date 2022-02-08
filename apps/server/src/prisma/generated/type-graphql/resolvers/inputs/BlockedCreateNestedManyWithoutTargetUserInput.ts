import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlockedCreateManyTargetUserInputEnvelope } from "../inputs/BlockedCreateManyTargetUserInputEnvelope";
import { BlockedCreateOrConnectWithoutTargetUserInput } from "../inputs/BlockedCreateOrConnectWithoutTargetUserInput";
import { BlockedCreateWithoutTargetUserInput } from "../inputs/BlockedCreateWithoutTargetUserInput";
import { BlockedWhereUniqueInput } from "../inputs/BlockedWhereUniqueInput";

@TypeGraphQL.InputType("BlockedCreateNestedManyWithoutTargetUserInput", {
  isAbstract: true,
})
export class BlockedCreateNestedManyWithoutTargetUserInput {
  @TypeGraphQL.Field(_type => [BlockedCreateWithoutTargetUserInput], {
    nullable: true,
  })
  create?: BlockedCreateWithoutTargetUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlockedCreateOrConnectWithoutTargetUserInput], {
    nullable: true,
  })
  connectOrCreate?: BlockedCreateOrConnectWithoutTargetUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BlockedCreateManyTargetUserInputEnvelope, {
    nullable: true,
  })
  createMany?: BlockedCreateManyTargetUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BlockedWhereUniqueInput], {
    nullable: true,
  })
  connect?: BlockedWhereUniqueInput[] | undefined;
}
