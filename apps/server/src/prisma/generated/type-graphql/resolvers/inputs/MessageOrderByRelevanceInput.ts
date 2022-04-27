import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageOrderByRelevanceFieldEnum } from "../../enums/MessageOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MessageOrderByRelevanceInput", {
  isAbstract: true,
})
export class MessageOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [MessageOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<
    | "id"
    | "message"
    | "mediaUrl"
    | "postId"
    | "storyId"
    | "sourceUserId"
    | "targetUserId"
    | "replyToId"
  >;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  search!: string;
}
