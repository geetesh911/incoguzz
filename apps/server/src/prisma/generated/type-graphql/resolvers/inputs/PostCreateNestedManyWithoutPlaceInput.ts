import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyPlaceInputEnvelope } from "../inputs/PostCreateManyPlaceInputEnvelope";
import { PostCreateOrConnectWithoutPlaceInput } from "../inputs/PostCreateOrConnectWithoutPlaceInput";
import { PostCreateWithoutPlaceInput } from "../inputs/PostCreateWithoutPlaceInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedManyWithoutPlaceInput", {
  isAbstract: true,
})
export class PostCreateNestedManyWithoutPlaceInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutPlaceInput], {
    nullable: true,
  })
  create?: PostCreateWithoutPlaceInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutPlaceInput], {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutPlaceInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyPlaceInputEnvelope, {
    nullable: true,
  })
  createMany?: PostCreateManyPlaceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true,
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
