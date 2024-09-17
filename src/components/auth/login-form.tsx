"use client";
import route from "@/app/config/route";
import CardWrapper from "./card-wrapper";
import { LoginSchema } from "../../../schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { Input } from "../ui/input";
import { cva } from "class-variance-authority";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

type LoginFormProps = {};

function LoginForm({}: LoginFormProps) {
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
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
          const response = await trigger();
        }}
      >
        <div className="spave-y-4">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm ">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-4">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" {...register("password")} />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </CardWrapper>
  );
}

export default LoginForm;
