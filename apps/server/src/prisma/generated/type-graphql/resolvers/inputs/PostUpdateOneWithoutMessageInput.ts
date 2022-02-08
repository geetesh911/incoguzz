import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutMessageInput } from "../inputs/PostCreateOrConnectWithoutMessageInput";
import { PostCreateWithoutMessageInput } from "../inputs/PostCreateWithoutMessageInput";
import { PostUpdateWithoutMessageInput } from "../inputs/PostUpdateWithoutMessageInput";
import { PostUpsertWithoutMessageInput } from "../inputs/PostUpsertWithoutMessageInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneWithoutMessageInput", {
  isAbstract: true,
})
export class PostUpdateOneWithoutMessageInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutMessageInput, {
    nullable: true,
  })
  create?: PostCreateWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutMessageInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutMessageInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateWithoutMessageInput, {
    nullable: true,
  })
  update?: PostUpdateWithoutMessageInput | undefined;
}
