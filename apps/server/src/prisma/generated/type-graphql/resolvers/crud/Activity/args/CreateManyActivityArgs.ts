import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityCreateManyInput } from "../../../inputs/ActivityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyActivityArgs {
  @TypeGraphQL.Field(_type => [ActivityCreateManyInput], {
    nullable: false,
  })
  data!: ActivityCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
