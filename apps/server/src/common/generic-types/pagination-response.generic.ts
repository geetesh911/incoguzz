import { ClassType, Field, ObjectType } from "type-graphql";
import PaginationOutput from "../outputs/pagination.output";

export interface IPaginatedResponse<T> {
  data: T[];
  pagination: PaginationOutput;
}

export default function PaginatedResponse<TItem>(TItemClass: ClassType<TItem>) {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedResponseClass implements IPaginatedResponse<TItem> {
    @Field(() => [TItemClass])
    data: TItem[];

    @Field(() => PaginationOutput)
    pagination: PaginationOutput;
  }
  return PaginatedResponseClass;
}
