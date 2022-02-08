import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipUpdateInput } from "../../../inputs/ClipUpdateInput";
import { ClipWhereUniqueInput } from "../../../inputs/ClipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateClipArgs {
  @TypeGraphQL.Field(_type => ClipUpdateInput, {
    nullable: false,
  })
  data!: ClipUpdateInput;

  @TypeGraphQL.Field(_type => ClipWhereUniqueInput, {
    nullable: false,
  })
  where!: ClipWhereUniqueInput;
}
