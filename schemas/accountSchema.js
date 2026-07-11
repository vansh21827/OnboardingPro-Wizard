import { z } from "zod";

export const accountSchema = z
  .object({
    username: z
      .string()
      .min(4, "Username must be at least 4 characters"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords do not match",
    }
  );