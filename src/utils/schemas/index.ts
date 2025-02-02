import { z } from "zod";

export const RequestQuotationSchema = z.object({
  firstName: z.string().min(1, "Name is required"),
  lastName: z.string(),
  phone: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  services: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "Select at least one service.",
    })
    .optional(),
  description: z.string(),
  message: z.string().optional(),
  attachments: z.any(),
});

export const ContactMeSchema = z.object({
  name: z.string().min(8, {
    message: "Name is Required"
  }),
  email: z.string().email("Please enter a valid email address"),
  message: z.string()
});
