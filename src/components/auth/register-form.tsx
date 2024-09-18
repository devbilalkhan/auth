"use client";
import route from "@/app/config/route";
import CardWrapper from "./card-wrapper";
import { Path, useForm } from "react-hook-form";
import { RegisterSchema, LoginSchema } from "../../../schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChangeEvent, useState } from "react";
import FormField from "./form-field";
import FormError from "./form-error";
import FormSuccess from "./form-success";
import SubmitButton from "./submit-button";
import { registerAction } from "../../../actions/register";

type RegisterFormProps = {};
type RegisteFormType = z.infer<typeof RegisterSchema>;

function RegisterForm({}: RegisterFormProps) {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const {
    register,
    formState: { errors },
    getValues,
    trigger,
    clearErrors,
  } = useForm<RegisteFormType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    clearErrors(name as Path<RegisteFormType>);
    setError("");
    setSuccess("");
  };
  return (
    <CardWrapper
      headerLabel="Use this form to create an account"
      backButtonHref={`${route.LOGIN}`}
      backButtonLabel="Already have an account?"
      showSocial
    >
      <form
        action={async () => {
          const result = await trigger();
          if (!result) return;
          const formData = getValues();
          if (formData) {
            const response = await registerAction(formData);
            if (!response.success) {
              setError(response.data.message);
              setSuccess("");
            } else {
              setSuccess(response.data.message);
              setError("");
            }
          }
        }}
        className="space-y-4"
      >
        <FormField<RegisteFormType>
          register={register}
          label="Email"
          id="email"
          type="email"
          handleChange={handleChange}
          errors={errors}
        />
        <FormField<RegisteFormType>
          register={register}
          label="First Name"
          id="firstName"
          type="firstName"
          handleChange={handleChange}
          errors={errors}
        />
        <FormField<RegisteFormType>
          register={register}
          label="Last Name"
          id="lastName"
          type="lastName"
          handleChange={handleChange}
          errors={errors}
        />
        <FormField<RegisteFormType>
          register={register}
          label="Password"
          id="password"
          type="password"
          handleChange={handleChange}
          errors={errors}
        />
        <FormField<RegisteFormType>
          register={register}
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          handleChange={handleChange}
          errors={errors}
        />
        <FormError message={error} />
        <FormSuccess message={success} />

        <SubmitButton className="w-full" label="Submit" />
      </form>
    </CardWrapper>
  );
}

export default RegisterForm;
