import { z } from 'zod';

export const UserSchema = z.object({
    username: z
        .string()
        .min(3)
        .max(30)
        .regex(/^[a-zA-Z0-9_]+$/),
    fName: z
        .string()
        .min(1),
    lName: z
        .string()
        .min(1),
    email: z
        .string()
        .email(),
    password: z
        .string()
        .min(6),
    isAdmin: z
        .boolean(),
    verifyCode: z
        .string(),
    verifyCodeExpiry: z
        .date(),
    isVerified: z
        .boolean(),
    createdAt: z
        .date(),
    updatedAt: z
        .date(),
}).refine(data => ({
    username: data.username.toLowerCase()
}));