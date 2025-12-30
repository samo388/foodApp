import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import client from "prom-client";

// ================== ENV ==================
dotenv.config();

// ================== APP ==================
const app = express();
const PORT = process.env.PORT || 5000;

// ================== MIDDLEWARE ==================
app.use(cors());
app.use(express.json());

// ================== PROMETHEUS ==================
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ prefix: "foodapp_" });

// HTTP Requests Counter
const httpRequestCounter = new client.Counter({
  name: "foodapp_http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "path", "status"],
});

// Count all requests
app.use((req, res, next) => {
  res.on("finish", () => {
    httpRequestCounter.inc({
      method: req.method,
      path: req.path,
      status: res.statusCode,
    });
  });
  next();
});

// Metrics endpoint
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

// ================== MONGODB ==================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// ================== MODELS ==================
const foodSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    stars: Number,
    imageUrl: String,
  },
  { timestamps: true }
);

const Food = mongoose.model("Food", foodSchema);

// ================== ROUTES ==================

// Health check
app.get("/", (req, res) => {
  res.send("🚀 FoodApp Backend Running");
});

// Foods API
app.get("/api/foods", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch foods" });
  }
});

// Dashboard API
import dashboardRoutes from "./routes/dashboard.routes.js";
app.use("/api", dashboardRoutes);

// ================== SERVER ==================
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
