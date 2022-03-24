import { ObjectType } from "type-graphql";
import GetUserPostsOutput from "./get-user-posts.output";

@ObjectType()
class GetAllPostsOutput extends GetUserPostsOutput {}

export default GetAllPostsOutput;
