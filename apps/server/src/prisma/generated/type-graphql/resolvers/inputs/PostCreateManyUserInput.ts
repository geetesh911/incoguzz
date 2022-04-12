import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostType } from "../../enums/PostType";

@TypeGraphQL.InputType("PostCreateManyUserInput", {
  isAbstract: true,
})
export class PostCreateManyUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  caption?: string | undefined;

  @TypeGraphQL.Field(_type => PostType, {
    nullable: false,
  })
  type!: "POLL" | "PHOTO" | "VIDEO" | "CLIP" | "TEXTUAL" | "AUDIO";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  placeId?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  archive?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  published?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  slug!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  views?: number | undefined;
}
