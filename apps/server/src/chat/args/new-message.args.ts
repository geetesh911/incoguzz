import { ArrayMaxSize } from "class-validator";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import { ArgsType, Field } from "type-graphql";
import { NewMessageInput } from "../inputs/new-message.input";

@ArgsType()
export class NewMessageArgs {
  @Field(() => NewMessageInput)
  newMessageInput: NewMessageInput;

  @Field(() => GraphQLUpload, { nullable: true })
  @ArrayMaxSize(1)
  media?: Promise<FileUpload>;
}
