import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutTextualInput } from "../inputs/PostCreateNestedOneWithoutTextualInput";

@TypeGraphQL.InputType("TextualCreateInput", {
  isAbstract: true,
})
export class TextualCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  text!: string;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutTextualInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutTextualInput;
}
