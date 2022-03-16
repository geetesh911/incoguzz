import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AudioOrderByWithRelationInput } from "../../../inputs/AudioOrderByWithRelationInput";
import { AudioWhereInput } from "../../../inputs/AudioWhereInput";
import { AudioWhereUniqueInput } from "../../../inputs/AudioWhereUniqueInput";
import { AudioScalarFieldEnum } from "../../../../enums/AudioScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAudioArgs {
  @TypeGraphQL.Field(_type => AudioWhereInput, {
    nullable: true,
  })
  where?: AudioWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AudioOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: AudioOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AudioWhereUniqueInput, {
    nullable: true,
  })
  cursor?: AudioWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AudioScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "url" | "postId" | "thumbnailUrl"> | undefined;
}
