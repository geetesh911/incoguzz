import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VideoCreateOrConnectWithoutPostInput } from "../inputs/VideoCreateOrConnectWithoutPostInput";
import { VideoCreateWithoutPostInput } from "../inputs/VideoCreateWithoutPostInput";
import { VideoUpdateWithoutPostInput } from "../inputs/VideoUpdateWithoutPostInput";
import { VideoUpsertWithoutPostInput } from "../inputs/VideoUpsertWithoutPostInput";
import { VideoWhereUniqueInput } from "../inputs/VideoWhereUniqueInput";

@TypeGraphQL.InputType("VideoUpdateOneWithoutPostInput", {
  isAbstract: true,
})
export class VideoUpdateOneWithoutPostInput {
  @TypeGraphQL.Field(_type => VideoCreateWithoutPostInput, {
    nullable: true,
  })
  create?: VideoCreateWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => VideoCreateOrConnectWithoutPostInput, {
    nullable: true,
  })
  connectOrCreate?: VideoCreateOrConnectWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => VideoUpsertWithoutPostInput, {
    nullable: true,
  })
  upsert?: VideoUpsertWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, {
    nullable: true,
  })
  connect?: VideoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => VideoUpdateWithoutPostInput, {
    nullable: true,
  })
  update?: VideoUpdateWithoutPostInput | undefined;
}
