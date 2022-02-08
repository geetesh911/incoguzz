import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Gender } from "../../enums/Gender";
import { InterestedInTypes } from "../../enums/InterestedInTypes";
import { RelationshipStatus } from "../../enums/RelationshipStatus";

@TypeGraphQL.InputType("ProfileCreateManyInput", {
  isAbstract: true,
})
export class ProfileCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  nickname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  bio?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  mobileNo?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  country?: string | undefined;

  @TypeGraphQL.Field(_type => Gender, {
    nullable: true,
  })
  gender?: "MALE" | "FEMALE" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  dob?: Date | undefined;

  @TypeGraphQL.Field(_type => InterestedInTypes, {
    nullable: true,
  })
  interestedIn?: "MEN" | "FEMALE" | undefined;

  @TypeGraphQL.Field(_type => RelationshipStatus, {
    nullable: true,
  })
  relationshipStatus?:
    | "SINGLE"
    | "ENGAGED"
    | "MARRIED"
    | "SEPERATED"
    | "DIVORCED"
    | "WIDOWED"
    | "ITS_COMPLICATED"
    | "IN_A_RELATIONSHIP"
    | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  website?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  dpUrl?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  userId?: string | undefined;
}
