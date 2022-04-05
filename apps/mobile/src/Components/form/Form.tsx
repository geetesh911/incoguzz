import React from "react";
import { View } from "react-native";
import { FormikProps } from "formik";
import { IFormComponents, IFormField, IFormFields } from "./interfaces";
import { Input, PasswordInput } from "./Input";
import _ from "lodash";

interface IFormProps<Values> {
  formFields: IFormFields<Values>;
  formik: FormikProps<Values>;
}

export const Form = <Values,>({ formFields, formik }: IFormProps<Values>) => {
  const { errors, touched, values, handleChange } = formik;

  const getFormComponent = (
    formField: IFormField<Values>,
  ): JSX.Element | undefined => {
    const { name, onChange, placeholder, type } = formField;
    const formComponents: IFormComponents = {
      Input: (
        <Input
          key={name as string}
          name={name as string}
          value={_.get(values, name)}
          onChange={onChange || handleChange(name)}
          placeholder={placeholder}
          error={_.get(touched, name) && (_.get(errors, name) as string)}
        />
      ),
      PasswordInput: (
        <PasswordInput
          key={name as string}
          name={name as string}
          value={_.get(values, name)}
          onChange={onChange || handleChange(name)}
          placeholder={placeholder}
          error={_.get(touched, name) && (_.get(errors, name) as string)}
        />
      ),
    };

    return formComponents[type];
  };
  return (
    <View>{formFields?.map(formField => getFormComponent(formField))}</View>
  );
};
