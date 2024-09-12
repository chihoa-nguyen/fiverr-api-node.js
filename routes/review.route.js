import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { createReview, getReviews } from "../controller/review.controller.js";
const router = express.Router();
router.post("/", verifyToken, createReview);
router.get("/:gigId", getReviews);
export default router;
