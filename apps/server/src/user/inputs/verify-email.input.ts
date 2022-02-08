import { IsNotEmpty, IsUUID } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class VerifyUuidInput {
  @Field()
  @IsNotEmpty()
  @IsUUID()
  readonly verification: string;
}
