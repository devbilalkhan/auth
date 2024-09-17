import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string()
    .min(1, { message: "Email address is required" })
    .email({ message: "Invalid email format" }),
  password: z.string().min(1,{message: "Valid password is required"})
})

