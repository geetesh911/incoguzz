import { Field, InputType } from "type-graphql";
import { IsNotEmpty, MinLength, MaxLength, IsString } from "class-validator";
import { ProfileInput } from "./profile.input";

@InputType()
export class UpdateUserInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly username: string;

  @Field(() => ProfileInput)
  readonly profile?: ProfileInput;
}
