import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("VideoCreateWithoutPostInput", {
  isAbstract: true,
})
export class VideoCreateWithoutPostInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  thumbnailUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  url!: string;
}
