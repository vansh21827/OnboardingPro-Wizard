import { z } from "zod";

export const personalSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters"),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters"),

  email: z
    .string()
    .email("Enter a valid email"),
});