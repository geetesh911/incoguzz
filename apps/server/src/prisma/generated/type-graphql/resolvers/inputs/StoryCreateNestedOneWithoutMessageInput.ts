import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoryCreateOrConnectWithoutMessageInput } from "../inputs/StoryCreateOrConnectWithoutMessageInput";
import { StoryCreateWithoutMessageInput } from "../inputs/StoryCreateWithoutMessageInput";
import { StoryWhereUniqueInput } from "../inputs/StoryWhereUniqueInput";

@TypeGraphQL.InputType("StoryCreateNestedOneWithoutMessageInput", {
  isAbstract: true,
})
export class StoryCreateNestedOneWithoutMessageInput {
  @TypeGraphQL.Field(_type => StoryCreateWithoutMessageInput, {
    nullable: true,
  })
  create?: StoryCreateWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => StoryCreateOrConnectWithoutMessageInput, {
    nullable: true,
  })
  connectOrCreate?: StoryCreateOrConnectWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => StoryWhereUniqueInput, {
    nullable: true,
  })
  connect?: StoryWhereUniqueInput | undefined;
}
