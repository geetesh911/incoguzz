import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Settings", {
  isAbstract: true,
})
export class Settings {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  user?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  userId?: string | null;
}
