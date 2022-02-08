import { Field, InputType } from "type-graphql";
import { IsNotEmpty, MinLength, MaxLength, IsString } from "class-validator";
import { User } from "@/prisma/generated/type-graphql";

@InputType()
export class LoginInput implements Partial<User> {
  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly emailOrUsername: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(1024)
  readonly password: string;
}
