import { PostType } from "@/prisma/generated/type-graphql";
import { ArrayMaxSize, ValidateIf } from "class-validator";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import { ArgsType, Field } from "type-graphql";
import { AddMediaPostInput } from "../inputs/add-post.input";

@ArgsType()
class AddMediaPostArgs {
  @Field(() => AddMediaPostInput)
  addMediaPostInput: AddMediaPostInput;

  @Field(() => [GraphQLUpload], { nullable: false })
  @ValidateIf(postInput => postInput.addMediaPostInput.type !== PostType.PHOTO)
  @ArrayMaxSize(1)
  media: Promise<FileUpload>[];

  @Field(() => GraphQLUpload, { nullable: true })
  @ValidateIf(postInput => postInput.addMediaPostInput.type === PostType.AUDIO)
  mediaThumbnail?: Promise<FileUpload>;
}

export default AddMediaPostArgs;
