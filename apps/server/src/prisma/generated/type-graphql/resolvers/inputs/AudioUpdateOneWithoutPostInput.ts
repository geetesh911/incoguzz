import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AudioCreateOrConnectWithoutPostInput } from "../inputs/AudioCreateOrConnectWithoutPostInput";
import { AudioCreateWithoutPostInput } from "../inputs/AudioCreateWithoutPostInput";
import { AudioUpdateWithoutPostInput } from "../inputs/AudioUpdateWithoutPostInput";
import { AudioUpsertWithoutPostInput } from "../inputs/AudioUpsertWithoutPostInput";
import { AudioWhereUniqueInput } from "../inputs/AudioWhereUniqueInput";

@TypeGraphQL.InputType("AudioUpdateOneWithoutPostInput", {
  isAbstract: true,
})
export class AudioUpdateOneWithoutPostInput {
  @TypeGraphQL.Field(_type => AudioCreateWithoutPostInput, {
    nullable: true,
  })
  create?: AudioCreateWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => AudioCreateOrConnectWithoutPostInput, {
    nullable: true,
  })
  connectOrCreate?: AudioCreateOrConnectWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => AudioUpsertWithoutPostInput, {
    nullable: true,
  })
  upsert?: AudioUpsertWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => AudioWhereUniqueInput, {
    nullable: true,
  })
  connect?: AudioWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AudioUpdateWithoutPostInput, {
    nullable: true,
  })
  update?: AudioUpdateWithoutPostInput | undefined;
}
