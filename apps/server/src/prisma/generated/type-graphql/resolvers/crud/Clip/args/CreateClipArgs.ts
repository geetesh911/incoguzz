import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipCreateInput } from "../../../inputs/ClipCreateInput";

@TypeGraphQL.ArgsType()
export class CreateClipArgs {
  @TypeGraphQL.Field(_type => ClipCreateInput, {
    nullable: false,
  })
  data!: ClipCreateInput;
}
