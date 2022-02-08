import { IsNotEmpty, MinLength, MaxLength, IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class ForgotPasswordInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly emailOrUsername: string;
}
