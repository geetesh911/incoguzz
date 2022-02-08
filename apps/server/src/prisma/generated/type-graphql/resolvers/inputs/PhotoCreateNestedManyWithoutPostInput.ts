import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCreateManyPostInputEnvelope } from "../inputs/PhotoCreateManyPostInputEnvelope";
import { PhotoCreateOrConnectWithoutPostInput } from "../inputs/PhotoCreateOrConnectWithoutPostInput";
import { PhotoCreateWithoutPostInput } from "../inputs/PhotoCreateWithoutPostInput";
import { PhotoWhereUniqueInput } from "../inputs/PhotoWhereUniqueInput";

@TypeGraphQL.InputType("PhotoCreateNestedManyWithoutPostInput", {
  isAbstract: true,
})
export class PhotoCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [PhotoCreateWithoutPostInput], {
    nullable: true,
  })
  create?: PhotoCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PhotoCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: PhotoCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PhotoCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: PhotoCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PhotoWhereUniqueInput], {
    nullable: true,
  })
  connect?: PhotoWhereUniqueInput[] | undefined;
}
