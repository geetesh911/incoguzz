import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollCreateOrConnectWithoutPostInput } from "../inputs/PollCreateOrConnectWithoutPostInput";
import { PollCreateWithoutPostInput } from "../inputs/PollCreateWithoutPostInput";
import { PollUpdateWithoutPostInput } from "../inputs/PollUpdateWithoutPostInput";
import { PollUpsertWithoutPostInput } from "../inputs/PollUpsertWithoutPostInput";
import { PollWhereUniqueInput } from "../inputs/PollWhereUniqueInput";

@TypeGraphQL.InputType("PollUpdateOneWithoutPostInput", {
  isAbstract: true,
})
export class PollUpdateOneWithoutPostInput {
  @TypeGraphQL.Field(_type => PollCreateWithoutPostInput, {
    nullable: true,
  })
  create?: PollCreateWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PollCreateOrConnectWithoutPostInput, {
    nullable: true,
  })
  connectOrCreate?: PollCreateOrConnectWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PollUpsertWithoutPostInput, {
    nullable: true,
  })
  upsert?: PollUpsertWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PollWhereUniqueInput, {
    nullable: true,
  })
  connect?: PollWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PollUpdateWithoutPostInput, {
    nullable: true,
  })
  update?: PollUpdateWithoutPostInput | undefined;
}
