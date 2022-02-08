import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutPollInput } from "../inputs/PostCreateOrConnectWithoutPollInput";
import { PostCreateWithoutPollInput } from "../inputs/PostCreateWithoutPollInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutPollInput", {
  isAbstract: true,
})
export class PostCreateNestedOneWithoutPollInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutPollInput, {
    nullable: true,
  })
  create?: PostCreateWithoutPollInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutPollInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutPollInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;
}
