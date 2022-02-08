import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutPlaceInput } from "../inputs/PostCreateWithoutPlaceInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateOrConnectWithoutPlaceInput", {
  isAbstract: true,
})
export class PostCreateOrConnectWithoutPlaceInput {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutPlaceInput, {
    nullable: false,
  })
  create!: PostCreateWithoutPlaceInput;
}
