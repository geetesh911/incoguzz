import { ObjectType, Field } from "type-graphql";
import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  IsString,
} from "class-validator";
import { Profile } from "@/prisma/generated/type-graphql";

@ObjectType()
export class LoginOutput {
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

  @Field()
  readonly accessToken: string;

  @Field()
  readonly refreshToken: string;
}
