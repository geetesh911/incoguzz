import { PostType } from "@/prisma/generated/type-graphql";
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsString,
  MaxLength,
} from "class-validator";
import { Field, InputType } from "type-graphql";
import PlaceInput from "./place.input";
import PollOptionInput from "./poll-option.input";

@InputType()
class CommonPostInput {
  @Field(() => PostType)
  @IsNotEmpty()
  @IsString()
  readonly type: PostType;

  @Field(() => [String], { nullable: true })
  @IsArray()
  @MaxLength(20, { each: true })
  readonly tags?: string[];

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  readonly published?: boolean;
}

@InputType()
export class AddMediaPostInput extends CommonPostInput {
  @Field(() => PlaceInput, { nullable: true })
  @IsString()
  readonly place?: PlaceInput;

  @Field(() => String, { nullable: true })
  @IsString()
  @MaxLength(1000)
  readonly caption?: string;
}

@InputType()
export class AddClipPostInput extends AddMediaPostInput {
  @Field(() => String, { nullable: true })
  readonly audioId?: string;
}

@InputType()
export class AddPollPostInput extends CommonPostInput {
  @Field(() => String, { nullable: true })
  @IsString()
  @MaxLength(500, { each: true })
  readonly pollQuestion: string;

  @Field(() => [PollOptionInput], { nullable: true })
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(100)
  readonly pollOptions: PollOptionInput[];
}

@InputType()
export class AddTextualPostInput extends CommonPostInput {
  @Field(() => String, { nullable: true })
  @IsString()
  @MaxLength(2000)
  readonly text: string;
}
