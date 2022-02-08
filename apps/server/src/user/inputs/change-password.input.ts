import { Field, InputType } from "type-graphql";
import { IsNotEmpty, MinLength, MaxLength, IsString } from "class-validator";

@InputType()
export class ChangePasswordInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(1024)
  readonly oldPassword: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(1024)
  readonly newPassword: string;
}
