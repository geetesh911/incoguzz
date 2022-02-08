import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ClipScalarWhereInput } from "../inputs/ClipScalarWhereInput";
import { ClipUpdateManyMutationInput } from "../inputs/ClipUpdateManyMutationInput";

@TypeGraphQL.InputType("ClipUpdateManyWithWhereWithoutClipAudioInput", {
  isAbstract: true,
})
export class ClipUpdateManyWithWhereWithoutClipAudioInput {
  @TypeGraphQL.Field(_type => ClipScalarWhereInput, {
    nullable: false,
  })
  where!: ClipScalarWhereInput;

  @TypeGraphQL.Field(_type => ClipUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ClipUpdateManyMutationInput;
}
