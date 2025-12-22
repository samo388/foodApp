import mongoose from "mongoose";
import Food from "./src/models/Food.js";

await mongoose.connect(process.env.MONGO_URI);

await Food.insertMany([
  {
    name: "Burger",
    imageUrl: " https://www.lurch.de/en/recipes/Recipes/Burger-Classic-Cheese?srsltid=AfmBOorPJGwm4juhdcp3swtO2NYBMHLuvgRn4OjvPM-hN4HPXG-qx-6m ",
    stars: 4.5,
    price: 80,
  },
  {
    name: "Pizza",
    imageUrl: "https://www.foodandwine.com/thmb/4qg95tjf0mgdHqez5OLLYc0PNT4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    stars: 4.8,
    price: 120,
  },
]);

console.log("🌱 Database seeded");
process.exit();
