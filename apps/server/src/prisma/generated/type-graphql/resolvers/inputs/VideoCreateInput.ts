import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutVideoInput } from "../inputs/PostCreateNestedOneWithoutVideoInput";

@TypeGraphQL.InputType("VideoCreateInput", {
  isAbstract: true,
})
export class VideoCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  thumbnailUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  url!: string;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutVideoInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutVideoInput;
}
