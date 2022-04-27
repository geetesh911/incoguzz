import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ActivityOrderByWithRelationAndSearchRelevanceInput";
import { ActivityWhereInput } from "../../../inputs/ActivityWhereInput";
import { ActivityWhereUniqueInput } from "../../../inputs/ActivityWhereUniqueInput";
import { ActivityScalarFieldEnum } from "../../../../enums/ActivityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PostActivitiesArgs {
  @TypeGraphQL.Field(_type => ActivityWhereInput, {
    nullable: true,
  })
  where?: ActivityWhereInput | undefined;

  @TypeGraphQL.Field(
    _type => [ActivityOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?: ActivityOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ActivityWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ActivityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ActivityScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<"id" | "type" | "userId" | "postId" | "createdAt" | "updatedAt">
    | undefined;
}
