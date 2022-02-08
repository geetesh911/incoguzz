import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PhotoCreateManyInput } from "../../../inputs/PhotoCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPhotoArgs {
  @TypeGraphQL.Field(_type => [PhotoCreateManyInput], {
    nullable: false,
  })
  data!: PhotoCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
