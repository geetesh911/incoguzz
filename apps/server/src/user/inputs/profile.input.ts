import { Field, InputType } from "type-graphql";
import { MinLength, MaxLength, IsDate, IsUrl } from "class-validator";
import {
  Gender,
  Profile,
  RelationshipStatus,
  InterestedInTypes,
} from "@/prisma/generated/type-graphql";

@InputType()
export class ProfileInput implements Partial<Profile> {
  @Field({ nullable: true })
  @MinLength(6)
  @MaxLength(255)
  nickname?: string;

  @Field({ nullable: true })
  @MinLength(10)
  @MaxLength(10)
  mobileNo?: string;

  @Field({ nullable: true })
  @MinLength(1)
  @MaxLength(500)
  bio?: string;

  @Field({ nullable: true })
  @MinLength(1)
  @MaxLength(20)
  country?: string;

  @Field(() => Gender, { nullable: true })
  gender?: Gender;

  @Field(() => Date, { nullable: true })
  @IsDate()
  dob?: Date;

  @Field(() => InterestedInTypes, { nullable: true })
  interestedIn?: InterestedInTypes;

  @Field(() => RelationshipStatus, { nullable: true })
  relationshipStatus?: RelationshipStatus;

  @Field({ nullable: true })
  @MinLength(5)
  @IsUrl()
  website?: string | null;
}
