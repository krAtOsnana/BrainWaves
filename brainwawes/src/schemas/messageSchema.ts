import {z} from "zod"

export const messageSchema = z.object({
    content: z
            .string()
            .min(10,"content must be of 10 character")
            .max(250, "content must be less then 250 character")

})
