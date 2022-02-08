import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostUpdateWithoutPlaceInput } from "../inputs/PostUpdateWithoutPlaceInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateWithWhereUniqueWithoutPlaceInput", {
  isAbstract: true,
})
export class PostUpdateWithWhereUniqueWithoutPlaceInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUpdateWithoutPlaceInput, {
    nullable: false,
  })
  data!: PostUpdateWithoutPlaceInput;
}
