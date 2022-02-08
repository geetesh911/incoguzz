import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VideoCreateInput } from "../../../inputs/VideoCreateInput";

@TypeGraphQL.ArgsType()
export class CreateVideoArgs {
  @TypeGraphQL.Field(_type => VideoCreateInput, {
    nullable: false,
  })
  data!: VideoCreateInput;
}
