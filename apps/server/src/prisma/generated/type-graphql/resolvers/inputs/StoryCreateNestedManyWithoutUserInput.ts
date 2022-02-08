import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoryCreateManyUserInputEnvelope } from "../inputs/StoryCreateManyUserInputEnvelope";
import { StoryCreateOrConnectWithoutUserInput } from "../inputs/StoryCreateOrConnectWithoutUserInput";
import { StoryCreateWithoutUserInput } from "../inputs/StoryCreateWithoutUserInput";
import { StoryWhereUniqueInput } from "../inputs/StoryWhereUniqueInput";

@TypeGraphQL.InputType("StoryCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class StoryCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [StoryCreateWithoutUserInput], {
    nullable: true,
  })
  create?: StoryCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [StoryCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: StoryCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => StoryCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: StoryCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [StoryWhereUniqueInput], {
    nullable: true,
  })
  connect?: StoryWhereUniqueInput[] | undefined;
}
