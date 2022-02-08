import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutPollInput } from "../inputs/PostCreateWithoutPollInput";
import { PostUpdateWithoutPollInput } from "../inputs/PostUpdateWithoutPollInput";

@TypeGraphQL.InputType("PostUpsertWithoutPollInput", {
  isAbstract: true,
})
export class PostUpsertWithoutPollInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutPollInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutPollInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutPollInput, {
    nullable: false,
  })
  create!: PostCreateWithoutPollInput;
}
