import { ObjectType, Field } from "type-graphql";
import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  IsString,
  IsBoolean,
} from "class-validator";

@ObjectType()
export class GoogleAuthOutput {
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
  @IsBoolean()
  readonly isVerified: boolean;

  @Field({ nullable: true })
  readonly accessToken?: string;

  @Field({ nullable: true })
  readonly refreshToken?: string;
}
