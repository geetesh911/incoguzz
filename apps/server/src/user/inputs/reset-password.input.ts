import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  IsString,
  IsUUID,
} from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class ResetPasswordInput {
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
  @MaxLength(1024)
  readonly password: string;

  @Field()
  @IsUUID()
  readonly verificationUuid: string;

  @Field()
  @IsString()
  readonly verificationTokenId: string;
}
