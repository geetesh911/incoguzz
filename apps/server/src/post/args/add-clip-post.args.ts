import { ArrayMaxSize } from "class-validator";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import { ArgsType, Field } from "type-graphql";
import { AddClipPostInput } from "../inputs/add-post.input";

@ArgsType()
class AddClipPostArgs {
  @Field(() => AddClipPostInput)
  addClipPostInput: AddClipPostInput;

  @Field(() => GraphQLUpload, { nullable: false })
  @ArrayMaxSize(1)
  clipMedia: Promise<FileUpload>;

  @Field(() => GraphQLUpload, { nullable: false })
  @ArrayMaxSize(1)
  clipAudioMedia: Promise<FileUpload>;
}

export default AddClipPostArgs;
