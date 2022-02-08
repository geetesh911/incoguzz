import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PlaceCreateOrConnectWithoutPostsInput } from "../inputs/PlaceCreateOrConnectWithoutPostsInput";
import { PlaceCreateWithoutPostsInput } from "../inputs/PlaceCreateWithoutPostsInput";
import { PlaceUpdateWithoutPostsInput } from "../inputs/PlaceUpdateWithoutPostsInput";
import { PlaceUpsertWithoutPostsInput } from "../inputs/PlaceUpsertWithoutPostsInput";
import { PlaceWhereUniqueInput } from "../inputs/PlaceWhereUniqueInput";

@TypeGraphQL.InputType("PlaceUpdateOneWithoutPostsInput", {
  isAbstract: true,
})
export class PlaceUpdateOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => PlaceCreateWithoutPostsInput, {
    nullable: true,
  })
  create?: PlaceCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PlaceCreateOrConnectWithoutPostsInput, {
    nullable: true,
  })
  connectOrCreate?: PlaceCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => PlaceUpsertWithoutPostsInput, {
    nullable: true,
  })
  upsert?: PlaceUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => PlaceWhereUniqueInput, {
    nullable: true,
  })
  connect?: PlaceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PlaceUpdateWithoutPostsInput, {
    nullable: true,
  })
  update?: PlaceUpdateWithoutPostsInput | undefined;
}
