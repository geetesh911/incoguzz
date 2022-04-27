import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhotoOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PhotoOrderByWithRelationAndSearchRelevanceInput";
import { PhotoWhereInput } from "../../../inputs/PhotoWhereInput";
import { PhotoWhereUniqueInput } from "../../../inputs/PhotoWhereUniqueInput";
import { PhotoScalarFieldEnum } from "../../../../enums/PhotoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPhotoArgs {
  @TypeGraphQL.Field(_type => PhotoWhereInput, {
    nullable: true,
  })
  where?: PhotoWhereInput | undefined;

  @TypeGraphQL.Field(
    _type => [PhotoOrderByWithRelationAndSearchRelevanceInput],
    {
      nullable: true,
    },
  )
  orderBy?: PhotoOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => PhotoWhereUniqueInput, {
    nullable: true,
  })
  cursor?: PhotoWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PhotoScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "url" | "postId"> | undefined;
}
