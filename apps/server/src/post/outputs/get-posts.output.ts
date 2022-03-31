import { ObjectType } from "type-graphql";
import GetUserPostsOutput from "./get-user-posts.output";

@ObjectType()
class GetPostsOutput extends GetUserPostsOutput {}

export default GetPostsOutput;
