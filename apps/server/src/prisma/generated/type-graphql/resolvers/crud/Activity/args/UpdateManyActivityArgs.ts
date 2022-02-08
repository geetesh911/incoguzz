import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityUpdateManyMutationInput } from "../../../inputs/ActivityUpdateManyMutationInput";
import { ActivityWhereInput } from "../../../inputs/ActivityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyActivityArgs {
  @TypeGraphQL.Field(_type => ActivityUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ActivityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ActivityWhereInput, {
    nullable: true,
  })
  where?: ActivityWhereInput | undefined;
}
