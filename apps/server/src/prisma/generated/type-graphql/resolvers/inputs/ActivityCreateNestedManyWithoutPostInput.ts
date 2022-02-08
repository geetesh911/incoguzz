import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityCreateManyPostInputEnvelope } from "../inputs/ActivityCreateManyPostInputEnvelope";
import { ActivityCreateOrConnectWithoutPostInput } from "../inputs/ActivityCreateOrConnectWithoutPostInput";
import { ActivityCreateWithoutPostInput } from "../inputs/ActivityCreateWithoutPostInput";
import { ActivityWhereUniqueInput } from "../inputs/ActivityWhereUniqueInput";

@TypeGraphQL.InputType("ActivityCreateNestedManyWithoutPostInput", {
  isAbstract: true,
})
export class ActivityCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [ActivityCreateWithoutPostInput], {
    nullable: true,
  })
  create?: ActivityCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [ActivityCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: ActivityCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => ActivityCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: ActivityCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ActivityWhereUniqueInput], {
    nullable: true,
  })
  connect?: ActivityWhereUniqueInput[] | undefined;
}
