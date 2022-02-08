import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("PhotoMaxAggregate", {
  isAbstract: true,
})
export class PhotoMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  postId!: string | null;
}
