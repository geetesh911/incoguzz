import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipWhereInput } from "../../../inputs/ClipWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyClipArgs {
  @TypeGraphQL.Field(_type => ClipWhereInput, {
    nullable: true,
  })
  where?: ClipWhereInput | undefined;
}
