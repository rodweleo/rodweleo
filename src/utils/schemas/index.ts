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
  attachments: z.instanceof(FileList).optional()
});

export const ContactMeSchema = z.object({
  firstName: z.string(),
  lastName: z.string().optional(),
  email: z.string().email("Please enter a valid emial address"),
  message: z.string().optional(),
});
