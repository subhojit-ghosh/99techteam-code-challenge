import { Prisma, PrismaClient } from "@prisma/client";
import { z } from "zod";
import {
  createTaskValidationSchema,
  listTasksValidationSchema,
  updateTaskValidationSchema,
} from "../validations/task.validation";
import APIError from "../utils/api-error";

const prisma = new PrismaClient();

async function getAll(query: z.infer<typeof listTasksValidationSchema.query>) {
  const { page = 1, limit = 10, search, dueDate, tags, ...filters } = query;

  const where: Prisma.TaskWhereInput = {
    ...filters,
    ...(tags && {
      tags: { contains: tags },
    }),
    ...(dueDate && {
      dueDate: new Date(dueDate),
    }),
    ...(search && {
      OR: [
        { title: { contains: search } },
        { description: { contains: search } },
      ],
    }),
  };

  const tasks = await prisma.task.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  const totalRecords = await prisma.task.count({ where });

  return {
    tasks,
    totalRecords,
    totalPages: Math.ceil(totalRecords / limit),
    page,
    limit,
  };
}

async function getById(id: string) {
  const task = await prisma.task.findFirst({
    where: {
      id: id,
    },
  });

  if (!task) {
    throw new APIError(404, "Task not found");
  }

  return task;
}

async function create(data: z.infer<typeof createTaskValidationSchema.body>) {
  const isTitleDuplicate = await prisma.task.findFirst({
    where: {
      title: data.title,
    },
  });

  if (isTitleDuplicate) {
    throw new APIError(400, "A task with the same title already exists");
  }

  return await prisma.task.create({
    data: {
      ...data,
      dueDate: data.dueDate ? new Date(data.dueDate) : undefined,
    },
  });
}

async function update(
  id: string,
  data: z.infer<typeof updateTaskValidationSchema.body>
) {
  const isTitleDuplicate = await prisma.task.findFirst({
    where: {
      title: data.title,
      NOT: {
        id,
      },
    },
  });

  if (isTitleDuplicate) {
    throw new APIError(400, "A task with the same title already exists");
  }

  return await prisma.task.update({
    where: {
      id,
    },
    data: {
      ...data,
      dueDate: data.dueDate ? new Date(data.dueDate) : undefined,
    },
  });
}

async function complete(id: string) {
  const task = await prisma.task.findUnique({
    where: {
      id,
    },
  });

  if (!task) {
    throw new APIError(404, "Task not found");
  }

  if (task.isCompleted) {
    throw new APIError(400, "Task is already completed");
  }

  return await prisma.task.update({
    where: {
      id,
    },
    data: {
      isCompleted: true,
      completedAt: new Date(),
    },
  });
}

async function remove(id: string) {
  const task = await prisma.task.findUnique({
    where: {
      id,
    },
  });

  if (!task) {
    throw new APIError(404, "Task not found");
  }

  return await prisma.task.delete({
    where: {
      id,
    },
  });
}

export default { getAll, getById, create, update, complete, remove };
