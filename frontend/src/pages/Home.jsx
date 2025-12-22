import { useEffect, useState } from "react";
import { getAllFoods } from "../services/foodService";

export default function Home() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const data = await getAllFoods();
        setFoods(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch foods:", err);
        setError("Failed to load foods");
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) return <h2>Loading foods...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>🍔 FoodApp</h1>

      {!Array.isArray(foods) || foods.length === 0 ? (
        <p>No foods available</p>
      ) : (
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
      )}
    </div>
  );
}
