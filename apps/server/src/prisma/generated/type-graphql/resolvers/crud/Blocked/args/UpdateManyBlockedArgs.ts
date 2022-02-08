import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlockedUpdateManyMutationInput } from "../../../inputs/BlockedUpdateManyMutationInput";
import { BlockedWhereInput } from "../../../inputs/BlockedWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBlockedArgs {
  @TypeGraphQL.Field(_type => BlockedUpdateManyMutationInput, {
    nullable: false,
  })
  data!: BlockedUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BlockedWhereInput, {
    nullable: true,
  })
  where?: BlockedWhereInput | undefined;
}
