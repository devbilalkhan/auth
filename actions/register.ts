"use server";

import { z } from "zod";
import { RegisterSchema } from "../schemas/schemas";
import { sleep } from "@/lib/utils";
import { genSaltSync, hashSync } from "bcrypt-ts";
import prisma from "@/lib/db";
import { getUserByEmail } from "../data/user";

export const registerAction = async (
  formData: z.infer<typeof RegisterSchema>
) => {
  await sleep(1000);
  const validatedRegisterForm = RegisterSchema.safeParse(formData);
  if (!validatedRegisterForm.success) {
    console.log(validatedRegisterForm.error);
    return {
      success: false,
      data: {
        message: validatedRegisterForm.error?.message || "Something went wrong",
      },
    };
  }

  const { email, password, firstName, lastName } = validatedRegisterForm.data;
  const salt = genSaltSync(10);
  const hashedPassword = hashSync(password, salt);

  const existingUser = await getUserByEmail(email) 

  if (!existingUser) {
    const dbUser = await prisma.user.create({
      data: {
        name: firstName + " " + lastName,
        email,
        password: hashedPassword,
      },
    });
  } else {
    return {
      success: false,
      data: {
        message: "User already exists.",
      },
    };
    //TODO: Send verfication token email
  }

  return {
    success: true,
    data: {
      message: "Register successfully completed",
    },
  };
};
