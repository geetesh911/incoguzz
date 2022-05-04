import { IsArray, IsString, MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
class CommonPostUpdateInput {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @MaxLength(20, { each: true })
  readonly tags?: string[];
}

@InputType()
export class UpdateMediaPostInput extends CommonPostUpdateInput {
  @Field(() => String, { nullable: true })
  @IsString()
  @MaxLength(1000)
  readonly caption?: string;
}

@InputType()
export class UpdateTextualPostInput extends CommonPostUpdateInput {
  @Field(() => String, { nullable: true })
  @IsString()
  @MaxLength(2000)
  readonly text?: string;
}
