import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhotoOrderByWithAggregationInput } from "../../../inputs/PhotoOrderByWithAggregationInput";
import { PhotoScalarWhereWithAggregatesInput } from "../../../inputs/PhotoScalarWhereWithAggregatesInput";
import { PhotoWhereInput } from "../../../inputs/PhotoWhereInput";
import { PhotoScalarFieldEnum } from "../../../../enums/PhotoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPhotoArgs {
  @TypeGraphQL.Field(_type => PhotoWhereInput, {
    nullable: true,
  })
  where?: PhotoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PhotoOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: PhotoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "url" | "postId">;

  @TypeGraphQL.Field(_type => PhotoScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: PhotoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
