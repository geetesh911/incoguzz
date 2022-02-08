import { ObjectType, Field } from "type-graphql";
import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  IsString,
  IsBoolean,
  IsUUID,
} from "class-validator";

@ObjectType()
export class ForgotPasswordOutput {
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
  @IsUUID()
  readonly verificationUuid?: string;

  @Field({ nullable: true })
  @IsString()
  readonly verificationTokenId?: string;

  @Field({ nullable: true })
  @IsBoolean()
  readonly isVerified?: boolean;
}
