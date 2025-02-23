// src/utils/registerValidation.ts
import { z } from "zod";

// Validation schema with Zod
export const loginValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});
