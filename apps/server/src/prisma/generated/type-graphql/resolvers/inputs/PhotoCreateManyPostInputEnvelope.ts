import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateManyPostInput } from "../inputs/PhotoCreateManyPostInput";

@TypeGraphQL.InputType("PhotoCreateManyPostInputEnvelope", {
  isAbstract: true,
})
export class PhotoCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [PhotoCreateManyPostInput], {
    nullable: false,
  })
  data!: PhotoCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
