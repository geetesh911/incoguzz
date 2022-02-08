import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutPollInput } from "../inputs/PostCreateOrConnectWithoutPollInput";
import { PostCreateWithoutPollInput } from "../inputs/PostCreateWithoutPollInput";
import { PostUpdateWithoutPollInput } from "../inputs/PostUpdateWithoutPollInput";
import { PostUpsertWithoutPollInput } from "../inputs/PostUpsertWithoutPollInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutPollInput", {
  isAbstract: true,
})
export class PostUpdateOneRequiredWithoutPollInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutPollInput, {
    nullable: true,
  })
  create?: PostCreateWithoutPollInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutPollInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutPollInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutPollInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutPollInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutPollInput, {
    nullable: true,
  })
  update?: PostUpdateWithoutPollInput | undefined;
}
