import { FieldPath, FieldValues } from "react-hook-form";

export type TFormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

export type TFormItemContextValue = {
  id: string;
};
