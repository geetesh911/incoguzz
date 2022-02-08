import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyPlaceInput } from "../inputs/PostCreateManyPlaceInput";

@TypeGraphQL.InputType("PostCreateManyPlaceInputEnvelope", {
  isAbstract: true,
})
export class PostCreateManyPlaceInputEnvelope {
  @TypeGraphQL.Field(_type => [PostCreateManyPlaceInput], {
    nullable: false,
  })
  data!: PostCreateManyPlaceInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
