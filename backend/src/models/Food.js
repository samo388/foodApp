import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    tags: [String],
    favorite: { type: Boolean, default: false },
    stars: { type: Number, default: 0 },
    imageUrl: { type: String, required: true },
    origins: [String],
    cookTime: String,
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model("Food", foodSchema);

export default Food;
