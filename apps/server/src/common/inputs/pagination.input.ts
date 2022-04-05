import { IsBoolean, IsNumber, IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
class PaginationInput {
  @Field(() => Number)
  @IsNumber()
  readonly take: number;

  @Field(() => Boolean)
  @IsBoolean()
  readonly firstQueryResult: boolean;

  @Field(() => String, { nullable: true })
  @IsString()
  readonly cursor?: string;
}

export default PaginationInput;
