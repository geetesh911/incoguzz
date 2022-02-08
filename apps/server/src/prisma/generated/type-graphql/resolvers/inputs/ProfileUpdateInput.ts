import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableEnumGenderFieldUpdateOperationsInput } from "../inputs/NullableEnumGenderFieldUpdateOperationsInput";
import { NullableEnumInterestedInTypesFieldUpdateOperationsInput } from "../inputs/NullableEnumInterestedInTypesFieldUpdateOperationsInput";
import { NullableEnumRelationshipStatusFieldUpdateOperationsInput } from "../inputs/NullableEnumRelationshipStatusFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutProfileInput } from "../inputs/UserUpdateOneWithoutProfileInput";

@TypeGraphQL.InputType("ProfileUpdateInput", {
  isAbstract: true,
})
export class ProfileUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  nickname?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  bio?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  mobileNo?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  country?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableEnumGenderFieldUpdateOperationsInput, {
    nullable: true,
  })
  gender?: NullableEnumGenderFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  dob?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(
    _type => NullableEnumInterestedInTypesFieldUpdateOperationsInput,
    {
      nullable: true,
    },
  )
  interestedIn?:
    | NullableEnumInterestedInTypesFieldUpdateOperationsInput
    | undefined;

  @TypeGraphQL.Field(
    _type => NullableEnumRelationshipStatusFieldUpdateOperationsInput,
    {
      nullable: true,
    },
  )
  relationshipStatus?:
    | NullableEnumRelationshipStatusFieldUpdateOperationsInput
    | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  website?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  dpUrl?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutProfileInput, {
    nullable: true,
  })
  user?: UserUpdateOneWithoutProfileInput | undefined;
}
