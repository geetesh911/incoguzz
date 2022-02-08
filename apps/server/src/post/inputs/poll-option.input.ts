import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
class PollOptionInput {
  @Field(() => String)
  @IsNotEmpty()
  @MaxLength(500)
  @MinLength(2)
  @IsString()
  readonly option: string;
}

export default PollOptionInput;
