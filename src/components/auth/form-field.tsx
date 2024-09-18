import { Label } from "@radix-ui/react-label";
import { UseFormRegister } from "react-hook-form";
import { LoginSchema, RegisterSchema } from "../../../schemas/schemas";
import { z } from "zod";
import type { FieldErrors } from "react-hook-form";
import { Input } from "../ui/input";
import { ChangeEvent } from "react";

type FormType = z.infer<typeof LoginSchema | typeof RegisterSchema>;

type FormFieldProps = {
  message?: string;
  label: string;
  type: string;
  id: string;
  register: UseFormRegister<FormType>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errors: FieldErrors<FormType>;
};

function FormField({
  type,
  id,
  register,
  errors,
  handleChange,
  label,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        {...register(
          id as
            | "email"
            | "password"
            | "confirmPassword"
            | "lastName"
            | "firstName"
        )}
        onChange={handleChange}
      />
      {errors[id as keyof typeof errors] && (
        <FormErrorMessage
          message={errors[id as keyof typeof errors]?.message as string}
        />
      )}
    </div>
  );
}

export default FormField;

type FormErrorMessageProps = {
  message: string;
};

function FormErrorMessage({ message }: FormErrorMessageProps) {
  return (
    <>
      <p className="text-sm text-destructive">{message}</p>
    </>
  );
}
