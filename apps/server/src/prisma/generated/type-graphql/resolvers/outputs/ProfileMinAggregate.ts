import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Gender } from "../../enums/Gender";
import { InterestedInTypes } from "../../enums/InterestedInTypes";
import { RelationshipStatus } from "../../enums/RelationshipStatus";

@TypeGraphQL.ObjectType("ProfileMinAggregate", {
  isAbstract: true,
})
export class ProfileMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  nickname!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  bio!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  mobileNo!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  country!: string | null;

  @TypeGraphQL.Field(_type => Gender, {
    nullable: true,
  })
  gender!: "MALE" | "FEMALE" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  dob!: Date | null;

  @TypeGraphQL.Field(_type => InterestedInTypes, {
    nullable: true,
  })
  interestedIn!: "MEN" | "FEMALE" | null;

  @TypeGraphQL.Field(_type => RelationshipStatus, {
    nullable: true,
  })
  relationshipStatus!:
    | "SINGLE"
    | "ENGAGED"
    | "MARRIED"
    | "SEPERATED"
    | "DIVORCED"
    | "WIDOWED"
    | "ITS_COMPLICATED"
    | "IN_A_RELATIONSHIP"
    | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  website!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  dpUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  userId!: string | null;
}
