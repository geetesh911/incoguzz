import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StoryOrderByWithRelationInput } from "../../../inputs/StoryOrderByWithRelationInput";
import { StoryWhereInput } from "../../../inputs/StoryWhereInput";
import { StoryWhereUniqueInput } from "../../../inputs/StoryWhereUniqueInput";
import { StoryScalarFieldEnum } from "../../../../enums/StoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserStoriesArgs {
  @TypeGraphQL.Field(_type => StoryWhereInput, {
    nullable: true,
  })
  where?: StoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [StoryOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: StoryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => StoryWhereUniqueInput, {
    nullable: true,
  })
  cursor?: StoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [StoryScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<"id" | "mediaUrl" | "link" | "userId" | "createdAt" | "updatedAt">
    | undefined;
}
