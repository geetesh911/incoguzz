import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoWhereUniqueInput } from "../../../inputs/VideoWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteVideoArgs {
  @TypeGraphQL.Field(_type => VideoWhereUniqueInput, {
    nullable: false,
  })
  where!: VideoWhereUniqueInput;
}
