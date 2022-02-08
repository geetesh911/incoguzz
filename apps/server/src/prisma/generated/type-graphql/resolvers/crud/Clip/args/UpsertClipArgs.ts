import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipCreateInput } from "../../../inputs/ClipCreateInput";
import { ClipUpdateInput } from "../../../inputs/ClipUpdateInput";
import { ClipWhereUniqueInput } from "../../../inputs/ClipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertClipArgs {
  @TypeGraphQL.Field(_type => ClipWhereUniqueInput, {
    nullable: false,
  })
  where!: ClipWhereUniqueInput;

  @TypeGraphQL.Field(_type => ClipCreateInput, {
    nullable: false,
  })
  create!: ClipCreateInput;

  @TypeGraphQL.Field(_type => ClipUpdateInput, {
    nullable: false,
  })
  update!: ClipUpdateInput;
}
