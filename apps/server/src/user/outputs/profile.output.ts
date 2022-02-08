import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsDate,
  IsUrl,
  IsString,
} from "class-validator";
import {
  Gender,
  RelationshipStatus,
  InterestedInTypes,
} from "@/prisma/generated/type-graphql";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ProfileOutput {
  @Field()
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @Field()
  @MinLength(6)
  @MaxLength(255)
  @IsNotEmpty()
  nickname: string;

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

  @Field({ nullable: true })
  @MinLength(5)
  @IsUrl()
  dpUrl?: string | null;
}

@ObjectType()
export class SignUpProfileOutput {
  @Field()
  @MinLength(6)
  @MaxLength(255)
  nickname: string;
}
