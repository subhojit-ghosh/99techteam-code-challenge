import { z } from "zod";

export const listTasksValidationSchema = {
  query: z.object({
    status: z
      .enum(["PENDING", "IN_PROGRESS", "COMPLETED"], {
        message: "Status must be one of: PENDING, IN_PROGRESS, COMPLETED",
      })
      .optional(),
    priority: z
      .enum(["LOW", "MEDIUM", "HIGH"], {
        message: "Priority must be one of: LOW, MEDIUM, HIGH",
      })
      .optional(),
    dueDate: z.string().date("Due date must be a valid date").optional(),
    assignedTo: z.string().trim().optional(),
    tags: z.string().trim().optional(),
    page: z
      .string()
      .regex(/^\d+$/, { message: "Page must be a valid number string" })
      .transform((val) => parseInt(val, 10))
      .optional(),
    limit: z
      .string()
      .regex(/^\d+$/, { message: "Limit must be a valid number string" })
      .transform((val) => parseInt(val, 10))
      .optional(),
    isCompleted: z
      .string()
      .regex(/^(true|false)$/, {
        message: "isCompleted must be a valid boolean string",
      })
      .transform((val) => val === "true")
      .optional(),
    search: z.string().trim().optional(),
  }),
};

export const createTaskValidationSchema = {
  body: z.object({
    title: z
      .string()
      .trim()
      .min(3, { message: "Title must be at least 3 characters long" })
      .max(255, { message: "Title must be at most 255 characters long" }),
    description: z.string().trim().optional(),
    status: z
      .enum(["PENDING", "IN_PROGRESS", "COMPLETED"], {
        message: "Status must be one of: PENDING, IN_PROGRESS, COMPLETED",
      })
      .optional(),
    priority: z
      .enum(["LOW", "MEDIUM", "HIGH"], {
        message: "Priority must be one of: LOW, MEDIUM, HIGH",
      })
      .optional(),
    dueDate: z.string().date("Due date must be a valid date").optional(),
    assignedTo: z.string().trim().optional(),
    tags: z.string().trim().optional(),
  }),
};

export const updateTaskValidationSchema = {
  body: z.object({
    title: z
      .string()
      .trim()
      .min(3, { message: "Title must be at least 3 characters long" })
      .max(255, { message: "Title must be at most 255 characters long" }),
    description: z.string().trim().optional(),
    status: z
      .enum(["PENDING", "IN_PROGRESS", "COMPLETED"], {
        message: "Status must be one of: PENDING, IN_PROGRESS, COMPLETED",
      })
      .optional(),
    priority: z
      .enum(["LOW", "MEDIUM", "HIGH"], {
        message: "Priority must be one of: LOW, MEDIUM, HIGH",
      })
      .optional(),
    dueDate: z.string().date("Due date must be a valid date").optional(),
    assignedTo: z.string().trim().optional(),
    tags: z.string().trim().optional(),
  }),
};
