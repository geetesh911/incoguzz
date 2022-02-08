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
export class ResetPasswordOutput {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  @IsEmail()
  readonly email: string;

  @Field()
  readonly message: string;

  @Field({ nullable: true })
  @IsBoolean()
  readonly isVerified?: boolean;
}
