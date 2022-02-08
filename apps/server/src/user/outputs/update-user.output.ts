import { Field, ObjectType } from "type-graphql";
import { IsNotEmpty, MinLength, MaxLength, IsString } from "class-validator";
import { Profile } from "@/prisma/generated/type-graphql";

@ObjectType()
export class UpdateUserOutput {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly username: string;

  @Field(() => Profile)
  readonly profile: Profile;
}
