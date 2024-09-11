import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { deleteUser, getUser } from "../controller/user.controller.js";
const router = express.Router();
router.get("/:id", getUser);
router.delete("/:id", verifyToken, deleteUser);
export default router;
