import express from "express";
import {
  getAllFoods,
  getFoodById,
  seedFoods,
} from "../controllers/food.controller.js";

const router = express.Router();

router.get("/", getAllFoods);
router.get("/seed", seedFoods);
router.get("/:id", getFoodById);

export default router;
