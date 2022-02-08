import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PollAnswerCreateNestedManyWithoutPollInput } from "../inputs/PollAnswerCreateNestedManyWithoutPollInput";
import { PollOptionCreateNestedManyWithoutPollInput } from "../inputs/PollOptionCreateNestedManyWithoutPollInput";
import { PostCreateNestedOneWithoutPollInput } from "../inputs/PostCreateNestedOneWithoutPollInput";

@TypeGraphQL.InputType("PollCreateInput", {
  isAbstract: true,
})
export class PollCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  question!: string;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutPollInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutPollInput;

  @TypeGraphQL.Field(_type => PollOptionCreateNestedManyWithoutPollInput, {
    nullable: true,
  })
  pollOptions?: PollOptionCreateNestedManyWithoutPollInput | undefined;

  @TypeGraphQL.Field(_type => PollAnswerCreateNestedManyWithoutPollInput, {
    nullable: true,
  })
  pollAnswers?: PollAnswerCreateNestedManyWithoutPollInput | undefined;
}
