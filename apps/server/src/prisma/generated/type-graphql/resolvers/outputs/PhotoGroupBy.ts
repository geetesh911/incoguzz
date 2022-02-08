import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PhotoCountAggregate } from "../outputs/PhotoCountAggregate";
import { PhotoMaxAggregate } from "../outputs/PhotoMaxAggregate";
import { PhotoMinAggregate } from "../outputs/PhotoMinAggregate";

@TypeGraphQL.ObjectType("PhotoGroupBy", {
  isAbstract: true,
})
export class PhotoGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  postId!: string;

  @TypeGraphQL.Field(_type => PhotoCountAggregate, {
    nullable: true,
  })
  _count!: PhotoCountAggregate | null;

  @TypeGraphQL.Field(_type => PhotoMinAggregate, {
    nullable: true,
  })
  _min!: PhotoMinAggregate | null;

  @TypeGraphQL.Field(_type => PhotoMaxAggregate, {
    nullable: true,
  })
  _max!: PhotoMaxAggregate | null;
}
