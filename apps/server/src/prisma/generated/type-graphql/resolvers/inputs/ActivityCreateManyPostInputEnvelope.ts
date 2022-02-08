import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityCreateManyPostInput } from "../inputs/ActivityCreateManyPostInput";

@TypeGraphQL.InputType("ActivityCreateManyPostInputEnvelope", {
  isAbstract: true,
})
export class ActivityCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [ActivityCreateManyPostInput], {
    nullable: false,
  })
  data!: ActivityCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
