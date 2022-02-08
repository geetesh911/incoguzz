import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TextualUpdateManyMutationInput } from "../../../inputs/TextualUpdateManyMutationInput";
import { TextualWhereInput } from "../../../inputs/TextualWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTextualArgs {
  @TypeGraphQL.Field(_type => TextualUpdateManyMutationInput, {
    nullable: false,
  })
  data!: TextualUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TextualWhereInput, {
    nullable: true,
  })
  where?: TextualWhereInput | undefined;
}
