import Food from "../models/Food.js";
import sampleFoods from "../data/sampleFoods.js";

// GET all foods
export const getAllFoods = async (req, res) => {
  const foods = await Food.find();
  res.json(foods);
};

// GET food by ID
export const getFoodById = async (req, res) => {
  const food = await Food.findById(req.params.id);
  if (!food) return res.status(404).json({ message: "Food not found" });
  res.json(food);
};

// Seed sample foods (run once)
export const seedFoods = async (req, res) => {
  await Food.deleteMany();
  const createdFoods = await Food.insertMany(sampleFoods);
  res.json(createdFoods);
};
