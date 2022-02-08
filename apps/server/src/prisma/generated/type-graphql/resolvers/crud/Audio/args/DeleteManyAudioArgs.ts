import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudioWhereInput } from "../../../inputs/AudioWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAudioArgs {
  @TypeGraphQL.Field(_type => AudioWhereInput, {
    nullable: true,
  })
  where?: AudioWhereInput | undefined;
}
