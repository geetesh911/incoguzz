import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileOrderByRelevanceFieldEnum } from "../../enums/ProfileOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProfileOrderByRelevanceInput", {
  isAbstract: true,
})
export class ProfileOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ProfileOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<
    | "id"
    | "nickname"
    | "bio"
    | "mobileNo"
    | "country"
    | "website"
    | "dpUrl"
    | "userId"
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
