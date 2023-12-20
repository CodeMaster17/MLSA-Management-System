import { z } from "zod";

export const FormDataSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  country: z.string().min(1, "Country is required"),
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "Zip is required"),
});

export const MemberSchemaFormData = z.object({
  name: z.string().min(1, "Name is required"),
  position: z.string().min(1, "Member position is required"),
  roll_number: z.string().min(1, "Roll Number is required"),
  gender: z.string().min(1, "Gender is required"),
  current_year: z.string().min(1, "Year is required"),
  year_of_recruitment: z.string().min(1, "Recruitment Year is required"),
  stream: z.string().min(1, "Stream is required"),
  domain: z.string().min(1, "Domain is required"),
  image_url: z.string().url().min(1, "Image URL is required"),
  kiit_email_id: z
    .string()
    .email("Invalid KIIT Email")
    .min(1, "Email is required"),
  personal_email_id: z
    .string()
    .email("Invalid Email")
    .min(1, "Email is required"),
  phone: z
    .string()
    .min(1, "Phone Number is required")
    .max(10, "Phone number cannot be more than 10 digits"),
  branch: z.string().min(1, "Branch is required"),
});
