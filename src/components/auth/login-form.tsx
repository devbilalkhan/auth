"use client";
import route from "@/app/config/route";
import CardWrapper from "./card-wrapper";
import { LoginSchema } from "../../../schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Path, useForm } from "react-hook-form";

import { z } from "zod";
import SubmitButton from "./submit-button";

import FormError from "./form-error";
import FormSuccess from "./form-success";

import { login } from "../../../actions/login";
import { ChangeEvent, useState } from "react";
import FormField from "./form-field";
import { sleep } from "@/lib/utils";
type LoginFormProps = {};

function LoginForm({}: LoginFormProps) {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const {
    register,
    trigger,
    formState: { errors },
    getValues,
    setValue,
    clearErrors,
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    clearErrors(name as Path<z.infer<typeof LoginSchema>>);
    setError("");
    setSuccess("");
  };
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonHref={`${route.REGISTER}`}
      backButtonLabel="Don't have an account"
      showSocial
    >
      <form
        className="space-y-4"
        action={async () => {
          const result = await trigger();
          if (!result) return;
          const formData = getValues();

          if (formData) {
            const response = await login(formData);
            !response.success
              ? setError(response.data.message)
              : setSuccess(response.data.message);
          }
        }}
      >
        <FormField<z.infer<typeof LoginSchema>>
          register={register}
          label="Email"
          id="email"
          type="email"
          handleChange={handleChange}
          errors={errors}
        />
        <FormField<z.infer<typeof LoginSchema>>
          register={register}
          label="Password"
          id="password"
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

export default LoginForm;
