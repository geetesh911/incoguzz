import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProfileOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ProfileOrderByWithRelationAndSearchRelevanceInput";
import { ProfileWhereInput } from "../../../inputs/ProfileWhereInput";
import { ProfileWhereUniqueInput } from "../../../inputs/ProfileWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProfileArgs {
  @TypeGraphQL.Field(_type => ProfileWhereInput, {
    nullable: true,
  })
  where?: ProfileWhereInput | undefined;

  @TypeGraphQL.Field(
    _type => [ProfileOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?: ProfileOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ProfileWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ProfileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
