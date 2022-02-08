import { Field, InputType } from "type-graphql";
import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  IsString,
} from "class-validator";

@InputType()
export class SignUpInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(7)
  @MaxLength(255)
  @IsEmail()
  readonly email: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  readonly username: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(1024)
  readonly password: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  readonly nickname: string;
}
