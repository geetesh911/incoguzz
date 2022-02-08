import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateNestedManyWithoutStoryInput } from "../inputs/MessageCreateNestedManyWithoutStoryInput";
import { UserCreateNestedOneWithoutStoriesInput } from "../inputs/UserCreateNestedOneWithoutStoriesInput";

@TypeGraphQL.InputType("StoryCreateInput", {
  isAbstract: true,
})
export class StoryCreateInput {
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

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutStoriesInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutStoriesInput;

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutStoryInput, {
    nullable: true,
  })
  message?: MessageCreateNestedManyWithoutStoryInput | undefined;
}
