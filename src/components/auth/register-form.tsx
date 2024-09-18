"use client";
import route from "@/app/config/route";
import CardWrapper from "./card-wrapper";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../../../schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

type RegisterFormProps = {};

function RegisterForm({}: RegisterFormProps) {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const {
    register,
    formState: { errors },
    getValues,
    trigger,
    clearErrors,
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
  });
  return (
    <CardWrapper
      headerLabel="Use this form to create an account"
      backButtonHref={`${route.LOGIN}`}
      backButtonLabel="Already have an account?"
      showSocial
    >
      <form action="">
        <div>
          
        </div>
      </form>
    </CardWrapper>
  );
}

export default RegisterForm;
