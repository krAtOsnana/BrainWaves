import {z} from "zod"

export const userNameValidation = z
    .string()
    .min(5, "enter a valid user name minimum of 5 character")
    .max(20, "user name must be of maximum  20 character")
    .regex(/^[a-zA-Z0-9_]+$/ , "userName must not contain special character")

export const signUpSchema = z.object({
    userName: userNameValidation,
    email: z.string().email({message: "invalid email address"}),
    password: z.string().min(6, {message: "password must be of 6 character"}),
    })
    