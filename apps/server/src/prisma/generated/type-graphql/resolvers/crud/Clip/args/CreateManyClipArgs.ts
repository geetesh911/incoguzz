import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ClipCreateManyInput } from "../../../inputs/ClipCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyClipArgs {
  @TypeGraphQL.Field(_type => [ClipCreateManyInput], {
    nullable: false,
  })
  data!: ClipCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
