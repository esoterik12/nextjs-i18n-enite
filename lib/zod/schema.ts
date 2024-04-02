import { z } from 'zod'

export const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required.'),
  lastName: z.string().min(1, 'Last name is required.'),
  email: z.string().email('Invalid email address.'),
  phone: z.string().min(7, 'Invalid phone number.'),
  selectedServices: z.array(z.string()),
  beertapOption: z.string().min(5, 'Beer Tap Option Required.'),
  notes: z
    .string()
    .min(5, 'Please provide a description of your event.')
    .max(1000, 'The description cannot exceed 1000 characters.'),
  date: z.string()
})
