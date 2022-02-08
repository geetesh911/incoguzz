import { ObjectType, Field } from "type-graphql";
import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  IsString,
  IsBoolean,
  IsDate,
} from "class-validator";
import { AccountType, Profile, Role } from "@/prisma/generated/type-graphql";

@ObjectType()
export class UserOutput {
  @Field()
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  @IsEmail()
  readonly email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly username: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly profile: Profile;

  @Field(() => Role)
  @IsNotEmpty()
  @IsString()
  readonly role: Role;

  @Field(() => AccountType)
  @IsNotEmpty()
  @IsString()
  readonly accountType: AccountType;

  @Field()
  @IsBoolean()
  readonly isVerified: boolean;

  @Field()
  @IsBoolean()
  readonly active: boolean;

  @Field()
  @IsDate()
  readonly lastLogin: Date;

  @Field()
  @IsDate()
  readonly createdAt: Date;

  @Field()
  @IsDate()
  readonly updatedAt: Date;
}
