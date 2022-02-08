import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockedCreateManyInput } from "../../../inputs/BlockedCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBlockedArgs {
  @TypeGraphQL.Field(_type => [BlockedCreateManyInput], {
    nullable: false,
  })
  data!: BlockedCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
