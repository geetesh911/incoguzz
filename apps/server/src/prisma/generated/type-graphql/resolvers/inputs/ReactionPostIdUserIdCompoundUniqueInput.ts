import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ReactionPostIdUserIdCompoundUniqueInput", {
  isAbstract: true,
})
export class ReactionPostIdUserIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  postId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;
}
