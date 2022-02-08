import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutPlaceInput } from "../inputs/PostCreateWithoutPlaceInput";
import { PostUpdateWithoutPlaceInput } from "../inputs/PostUpdateWithoutPlaceInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpsertWithWhereUniqueWithoutPlaceInput", {
  isAbstract: true,
})
export class PostUpsertWithWhereUniqueWithoutPlaceInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutPlaceInput, {
    nullable: false,
  })
  update!: PostUpdateWithoutPlaceInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutPlaceInput, {
    nullable: false,
  })
  create!: PostCreateWithoutPlaceInput;
}
