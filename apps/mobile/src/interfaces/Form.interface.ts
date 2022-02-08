import { FormComponentTypes } from "../constants/Form";

export interface IFormField<T> {
  name: keyof T;
  type: FormComponentTypes;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export type IFormFields<T> = IFormField<T>[];

export type IFormComponents = {
  [key in FormComponentTypes]?: JSX.Element;
};
