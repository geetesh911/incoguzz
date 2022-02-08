import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StoryCreateOrConnectWithoutMessageInput } from "../inputs/StoryCreateOrConnectWithoutMessageInput";
import { StoryCreateWithoutMessageInput } from "../inputs/StoryCreateWithoutMessageInput";
import { StoryUpdateWithoutMessageInput } from "../inputs/StoryUpdateWithoutMessageInput";
import { StoryUpsertWithoutMessageInput } from "../inputs/StoryUpsertWithoutMessageInput";
import { StoryWhereUniqueInput } from "../inputs/StoryWhereUniqueInput";

@TypeGraphQL.InputType("StoryUpdateOneWithoutMessageInput", {
  isAbstract: true,
})
export class StoryUpdateOneWithoutMessageInput {
  @TypeGraphQL.Field(_type => StoryCreateWithoutMessageInput, {
    nullable: true,
  })
  create?: StoryCreateWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => StoryCreateOrConnectWithoutMessageInput, {
    nullable: true,
  })
  connectOrCreate?: StoryCreateOrConnectWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => StoryUpsertWithoutMessageInput, {
    nullable: true,
  })
  upsert?: StoryUpsertWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => StoryWhereUniqueInput, {
    nullable: true,
  })
  connect?: StoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StoryUpdateWithoutMessageInput, {
    nullable: true,
  })
  update?: StoryUpdateWithoutMessageInput | undefined;
}
