import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaceCreateManyInput } from "../../../inputs/PlaceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPlaceArgs {
  @TypeGraphQL.Field(_type => [PlaceCreateManyInput], {
    nullable: false,
  })
  data!: PlaceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
