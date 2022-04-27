import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MessageOrderByWithRelationAndSearchRelevanceInput";
import { MessageWhereInput } from "../../../inputs/MessageWhereInput";
import { MessageWhereUniqueInput } from "../../../inputs/MessageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMessageArgs {
  @TypeGraphQL.Field(_type => MessageWhereInput, {
    nullable: true,
  })
  where?: MessageWhereInput | undefined;

  @TypeGraphQL.Field(
    _type => [MessageOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?: MessageOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MessageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
