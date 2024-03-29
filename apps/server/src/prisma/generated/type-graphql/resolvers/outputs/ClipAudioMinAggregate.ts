import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ClipAudioMinAggregate", {
  isAbstract: true,
})
export class ClipAudioMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  audioUrl!: string | null;
}
