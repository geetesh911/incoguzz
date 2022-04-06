import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateOneRequiredWithoutBookmarksInput } from "../inputs/PostUpdateOneRequiredWithoutBookmarksInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBookmarksInput } from "../inputs/UserUpdateOneRequiredWithoutBookmarksInput";

@TypeGraphQL.InputType("BookmarkUpdateInput", {
  isAbstract: true,
})
export class BookmarkUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateOneRequiredWithoutBookmarksInput, {
    nullable: true,
  })
  post?: PostUpdateOneRequiredWithoutBookmarksInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBookmarksInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutBookmarksInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
