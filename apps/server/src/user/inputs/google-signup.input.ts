import { Field, InputType } from "type-graphql";
import { IsNotEmpty, MinLength, MaxLength, IsString } from "class-validator";

@InputType()
export class GoogleAuthInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  readonly googleAccessToken: string;

  @Field({ nullable: true })
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly username: string;
}
