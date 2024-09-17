import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string()
    .min(1, { message: "Email address is required" })
    .email({ message: "Invalid email format" }),
  password: z.string({invalid_type_error: "Please enter a valid password!" })
})

