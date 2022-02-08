import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipWhereUniqueInput } from "../../../inputs/ClipWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueClipArgs {
  @TypeGraphQL.Field(_type => ClipWhereUniqueInput, {
    nullable: false,
  })
  where!: ClipWhereUniqueInput;
}
