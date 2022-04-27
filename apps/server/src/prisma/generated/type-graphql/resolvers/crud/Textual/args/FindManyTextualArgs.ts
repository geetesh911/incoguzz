import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TextualOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TextualOrderByWithRelationAndSearchRelevanceInput";
import { TextualWhereInput } from "../../../inputs/TextualWhereInput";
import { TextualWhereUniqueInput } from "../../../inputs/TextualWhereUniqueInput";
import { TextualScalarFieldEnum } from "../../../../enums/TextualScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyTextualArgs {
  @TypeGraphQL.Field(_type => TextualWhereInput, {
    nullable: true,
  })
  where?: TextualWhereInput | undefined;

  @TypeGraphQL.Field(
    _type => [TextualOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?: TextualOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => TextualWhereUniqueInput, {
    nullable: true,
  })
  cursor?: TextualWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TextualScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "text" | "postId"> | undefined;
}
