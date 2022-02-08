import { Field, ObjectType } from "type-graphql";
import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  IsString,
  IsBoolean,
} from "class-validator";

@ObjectType()
export class SignUpOutput {
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
}
