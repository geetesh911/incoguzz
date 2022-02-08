import { IsNotEmpty, IsUUID } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class RefreshAcccessTokenInput {
  @Field()
  @IsNotEmpty()
  @IsUUID()
  readonly refreshToken: string;
}
