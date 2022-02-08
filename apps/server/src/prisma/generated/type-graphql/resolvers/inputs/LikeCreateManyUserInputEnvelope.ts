import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LikeCreateManyUserInput } from "../inputs/LikeCreateManyUserInput";

@TypeGraphQL.InputType("LikeCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class LikeCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [LikeCreateManyUserInput], {
    nullable: false,
  })
  data!: LikeCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
