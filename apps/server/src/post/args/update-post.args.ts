import { ArgsType, Field } from "type-graphql";
import {
  UpdateMediaPostInput,
  UpdateTextualPostInput,
} from "../inputs/update-post.input";

@ArgsType()
export class UpdateMediaPostArgs {
  @Field(() => String)
  postId: string;

  @Field(() => UpdateMediaPostInput)
  updatePostInput: UpdateMediaPostInput;
}

@ArgsType()
export class UpdateTextualPostArgs {
  @Field(() => String)
  postId: string;

  @Field(() => UpdateTextualPostInput)
  updatePostInput: UpdateTextualPostInput;
}
