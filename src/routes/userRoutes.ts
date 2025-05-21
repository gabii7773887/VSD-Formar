import { Router } from "express";
import {
  deleteUser,
  getUserById,
  updateUser,
  createUser,
} from "../controller/userController";

export const usersRouter = Router()
  .get("/users/:id", getUserById)
  .post("/users", createUser)
  .patch("/users/:id", updateUser)
  .delete("/users/:id", deleteUser);