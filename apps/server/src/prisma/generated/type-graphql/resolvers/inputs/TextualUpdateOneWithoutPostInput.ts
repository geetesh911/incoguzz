import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TextualCreateOrConnectWithoutPostInput } from "../inputs/TextualCreateOrConnectWithoutPostInput";
import { TextualCreateWithoutPostInput } from "../inputs/TextualCreateWithoutPostInput";
import { TextualUpdateWithoutPostInput } from "../inputs/TextualUpdateWithoutPostInput";
import { TextualUpsertWithoutPostInput } from "../inputs/TextualUpsertWithoutPostInput";
import { TextualWhereUniqueInput } from "../inputs/TextualWhereUniqueInput";

@TypeGraphQL.InputType("TextualUpdateOneWithoutPostInput", {
  isAbstract: true,
})
export class TextualUpdateOneWithoutPostInput {
  @TypeGraphQL.Field(_type => TextualCreateWithoutPostInput, {
    nullable: true,
  })
  create?: TextualCreateWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => TextualCreateOrConnectWithoutPostInput, {
    nullable: true,
  })
  connectOrCreate?: TextualCreateOrConnectWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => TextualUpsertWithoutPostInput, {
    nullable: true,
  })
  upsert?: TextualUpsertWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => TextualWhereUniqueInput, {
    nullable: true,
  })
  connect?: TextualWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TextualUpdateWithoutPostInput, {
    nullable: true,
  })
  update?: TextualUpdateWithoutPostInput | undefined;
}
