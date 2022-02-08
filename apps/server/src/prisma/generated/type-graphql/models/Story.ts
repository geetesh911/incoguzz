import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Message } from "../models/Message";
import { User } from "../models/User";
import { StoryCount } from "../resolvers/outputs/StoryCount";

@TypeGraphQL.ObjectType("Story", {
  isAbstract: true,
})
export class Story {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  mediaUrl!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  link?: string | null;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  message?: Message[];

  @TypeGraphQL.Field(_type => StoryCount, {
    nullable: true,
  })
  _count?: StoryCount | null;
}
