import { DotNestedKeys } from "../../interfaces";
import { FormComponentTypes } from "./constants";

export interface IFormField<T> {
  name: DotNestedKeys<T>;
  type: FormComponentTypes;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export type IFormFields<T> = IFormField<T>[];

export type IFormComponents = {
  [key in FormComponentTypes]?: JSX.Element;
};
