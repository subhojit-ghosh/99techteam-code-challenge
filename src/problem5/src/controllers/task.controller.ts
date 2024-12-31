import { Request, Response } from "express";
import taskService from "../services/task.service";
import asyncHandler from "../utils/async-handler";

const getAll = asyncHandler(async (req: Request, res: Response) => {
  const tasks = await taskService.getAll(req.query);
  res.status(200).json(tasks);
});

const getById = asyncHandler(async (req: Request, res: Response) => {
  const task = await taskService.getById(req.params.id);
  res.status(200).json({ task });
});

const create = asyncHandler(async (req: Request, res: Response) => {
  const task = await taskService.create(req.body);
  res.status(200).json({ task });
});

const update = asyncHandler(async (req: Request, res: Response) => {
  const task = await taskService.update(req.params.id, req.body);
  res.status(200).json({ task });
});

const complete = asyncHandler(async (req: Request, res: Response) => {
  const task = await taskService.complete(req.params.id);
  res.status(200).json({ task });
});

const remove = asyncHandler(async (req: Request, res: Response) => {
  const task = await taskService.remove(req.params.id);
  res.status(200).json({ task });
});

export default { getAll, getById, create, update, complete, remove };
