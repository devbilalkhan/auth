import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(8, { message: "Email address is required" })
    .email({ message: "Invalid email format" }),
  password: z.string().min(1, { message: "Valid password is required" }),
});



export const RegisterSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email address is required" })
    .email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(40, { message: "Password must be no more than 40 characters long" }),
  lastName: z
    .string()
    .min(1, { message: "Last name is required" })
    .max(50, { message: "Last name must be no more than 50 characters long" })
    .regex(/^[a-zA-Z-]+$/, {
      message: "Last name must contain only alphabetic characters or hyphens",
    }),
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(50, { message: "First name must be no more than 50 characters long" })
    .regex(/^[a-zA-Z]+$/, {
      message: "First name must contain only alphabetic characters",
    }),
});

