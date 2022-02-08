import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
class PlaceInput {
  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  @IsString()
  readonly name?: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @MaxLength(2000)
  readonly address?: string;
}

export default PlaceInput;
