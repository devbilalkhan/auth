"use client";
import route from "@/app/config/route";
import CardWrapper from "./card-wrapper";
import { LoginSchema } from "../../../schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { Input } from "../ui/input";

import { Label } from "../ui/label";

import SubmitButton from "./submit-button";

import FormError from "./form-error";
import FormSuccess from "./form-success";
import FieldErrors from "./field-errors";
import { login } from "../../../actions/login";
import { ChangeEvent, useState } from "react";
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
    const { name, value } = e.target;
    clearErrors(name as "email" | "password");
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
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            {...register("email")}
            onChange={(e) => {
              clearErrors("email");
            }}
          />
          {errors.email && <FieldErrors message={errors.email.message} />}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            {...register("password")}
            className="mt-none"
            onChange={handleChange}
          />
          {errors.password && <FieldErrors message={errors.password.message} />}
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <SubmitButton className="w-full" label="Submit" />
      </form>
    </CardWrapper>
  );
}

export default LoginForm;
