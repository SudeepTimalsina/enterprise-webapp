import { z } from "zod";

export const ProjectSchema = z.object({
    name: z
        .string()
        .min(3, "Name must be at least 3 characters"),
    
    description: z
        .string()
        .optional(),
});

export type ProjectInput = z.infer<typeof ProjectSchema>;