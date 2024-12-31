import express from "express";
import taskController from "../controllers/task.controller";
import { validateRequest } from "../middlewares/validate-request.middleware";
import {
  createTaskValidationSchema,
  listTasksValidationSchema,
  updateTaskValidationSchema,
} from "../validations/task.validation";

const router = express.Router();

router.get(
  "/",
  validateRequest(listTasksValidationSchema),
  taskController.getAll
);

router.get("/:id", taskController.getById);

router.post(
  "/",
  validateRequest(createTaskValidationSchema),
  taskController.create
);

router.put(
  "/:id",
  validateRequest(updateTaskValidationSchema),
  taskController.update
);

router.patch("/:id/complete", taskController.complete);

router.delete("/:id", taskController.remove);

export default router;
