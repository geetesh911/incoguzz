import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipCreateOrConnectWithoutPostInput } from "../inputs/ClipCreateOrConnectWithoutPostInput";
import { ClipCreateWithoutPostInput } from "../inputs/ClipCreateWithoutPostInput";
import { ClipUpdateWithoutPostInput } from "../inputs/ClipUpdateWithoutPostInput";
import { ClipUpsertWithoutPostInput } from "../inputs/ClipUpsertWithoutPostInput";
import { ClipWhereUniqueInput } from "../inputs/ClipWhereUniqueInput";

@TypeGraphQL.InputType("ClipUpdateOneWithoutPostInput", {
  isAbstract: true,
})
export class ClipUpdateOneWithoutPostInput {
  @TypeGraphQL.Field(_type => ClipCreateWithoutPostInput, {
    nullable: true,
  })
  create?: ClipCreateWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => ClipCreateOrConnectWithoutPostInput, {
    nullable: true,
  })
  connectOrCreate?: ClipCreateOrConnectWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => ClipUpsertWithoutPostInput, {
    nullable: true,
  })
  upsert?: ClipUpsertWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ClipWhereUniqueInput, {
    nullable: true,
  })
  connect?: ClipWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ClipUpdateWithoutPostInput, {
    nullable: true,
  })
  update?: ClipUpdateWithoutPostInput | undefined;
}
