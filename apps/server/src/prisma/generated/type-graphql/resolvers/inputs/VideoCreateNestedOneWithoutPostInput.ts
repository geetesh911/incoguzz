import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCreateOrConnectWithoutPostInput } from "../inputs/VideoCreateOrConnectWithoutPostInput";
import { VideoCreateWithoutPostInput } from "../inputs/VideoCreateWithoutPostInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";

@TypeGraphQL.InputType("VideoCreateNestedOneWithoutPostInput", {
  isAbstract: true,
})
export class VideoCreateNestedOneWithoutPostInput {
  @TypeGraphQL.Field(_type => VideoCreateWithoutPostInput, {
    nullable: true,
  })
  create?: VideoCreateWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => VideoCreateOrConnectWithoutPostInput, {
    nullable: true,
  })
  connectOrCreate?: VideoCreateOrConnectWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, {
    nullable: true,
  })
  connect?: VideoWhereUniqueInput | undefined;
}
