import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReactionPostIdUserIdCompoundUniqueInput } from "../inputs/ReactionPostIdUserIdCompoundUniqueInput";

@TypeGraphQL.InputType("ReactionWhereUniqueInput", {
  isAbstract: true,
})
export class ReactionWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => ReactionPostIdUserIdCompoundUniqueInput, {
    nullable: true,
  })
  postId_userId?: ReactionPostIdUserIdCompoundUniqueInput | undefined;
}
