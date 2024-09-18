import { Label } from "@radix-ui/react-label";
import { UseFormRegister } from "react-hook-form";
import { LoginSchema, RegisterSchema } from "../../../schemas/schemas";
import { z } from "zod";
import type { FieldErrors, Path } from "react-hook-form";
import { Input } from "../ui/input";
import { ChangeEvent } from "react";

const FormSchema = z.union([LoginSchema, RegisterSchema]);
type FormType = z.infer<typeof FormSchema>;

type FormFieldProps<T extends FormType> = {
  label: string;
  type: string;
  id: Path<T>;
  register: UseFormRegister<T>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errors: FieldErrors<T>;
};

function FormField<T extends FormType>({
  type,
  id,
  register,
  errors,
  handleChange,
  label,
}: FormFieldProps<T>) {
  return (
    <div className="">
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} {...register(id)} onChange={handleChange} />
      {errors[id as keyof typeof errors] && (
        <FormErrorMessage message={errors[id]?.message as string} />
      )}
    </div>
  );
}

export default FormField;

type FormErrorMessageProps = {
  message: string | undefined;
};

function FormErrorMessage({ message }: FormErrorMessageProps) {
  return (
    <>
      <p className="text-sm text-destructive">{message}</p>
    </>
  );
}
