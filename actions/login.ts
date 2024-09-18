"use server"

import { z } from "zod"
import { LoginSchema } from "../schemas/schemas"

export const login = async (value: z.infer<typeof LoginSchema>) => {
  const validatedFormData = LoginSchema.safeParse(value)
  if(!validatedFormData.success) {
    return {
      success: false,
      data: {
        message: "Something went wrong"
      }
    }
  }
  return {
    success: true,
    data: {
      message: "Email sent!"
    }
  }
}