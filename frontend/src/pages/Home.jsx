import { useEffect, useState } from "react";
import { getAllFoods } from "../services/foodService";

export default function Home() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllFoods()
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading foods...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>🍔 FoodApp</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {foods.map((food) => (
          <div
            key={food._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
            }}
          >
            <img
              src={food.imageUrl}
              alt={food.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{food.name}</h3>
            <p>⭐ {food.stars}</p>
            <p>💰 {food.price} EGP</p>
          </div>
        ))}
      </div>
    </div>
  );
}
