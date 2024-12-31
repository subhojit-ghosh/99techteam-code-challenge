import express from "express";
import tasksRoute from "./tasks.route";

const router = express.Router();

router.use("/tasks", tasksRoute);

export default router;
