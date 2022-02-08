import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCreateWithoutPostInput } from "../inputs/VideoCreateWithoutPostInput";
import { VideoUpdateWithoutPostInput } from "../inputs/VideoUpdateWithoutPostInput";

@TypeGraphQL.InputType("VideoUpsertWithoutPostInput", {
  isAbstract: true,
})
export class VideoUpsertWithoutPostInput {
  @TypeGraphQL.Field(_type => VideoUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: VideoUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => VideoCreateWithoutPostInput, {
    nullable: false,
  })
  create!: VideoCreateWithoutPostInput;
}
