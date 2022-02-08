import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipUpdateManyMutationInput } from "../../../inputs/ClipUpdateManyMutationInput";
import { ClipWhereInput } from "../../../inputs/ClipWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyClipArgs {
  @TypeGraphQL.Field(_type => ClipUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ClipUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ClipWhereInput, {
    nullable: true,
  })
  where?: ClipWhereInput | undefined;
}
