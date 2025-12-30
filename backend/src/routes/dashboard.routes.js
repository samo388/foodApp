import express from "express";
const router = express.Router();

router.get("/dashboard", async (req, res) => {
  res.json({
    kpis: [
      { label: "Orders", value: 128 },
      { label: "Revenue", value: "24,500 EGP" },
      { label: "Users", value: 312 },
    ],
    latestOrders: [
      { id: 1, customer: "Ahmed", total: 320, status: "Completed" },
      { id: 2, customer: "Mona", total: 210, status: "Pending" },
    ],
    popularFoods: [
      { id: 1, name: "Burger", orders: 52 },
      { id: 2, name: "Pizza", orders: 41 },
    ],
  });
});

export default router;
