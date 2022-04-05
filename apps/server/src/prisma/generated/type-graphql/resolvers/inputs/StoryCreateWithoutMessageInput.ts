import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutStoriesInput } from "../inputs/UserCreateNestedOneWithoutStoriesInput";

@TypeGraphQL.InputType("StoryCreateWithoutMessageInput", {
  isAbstract: true,
})
export class StoryCreateWithoutMessageInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  mediaUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  link?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutStoriesInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutStoriesInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;
}
