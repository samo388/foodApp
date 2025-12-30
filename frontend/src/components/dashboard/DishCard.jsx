import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import burgerImg from "@/assets/img/MSG-Smash-Burger-FT-RECIPE.jpg";
import { useState } from "react";


export default function DishCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      <Card>
        <div style={{ display: "flex", gap: 16 }}>
          {/* Image */}
          <div
            style={{
              position: "relative",
              width: 120,
              height: 120,
              borderRadius: 12,
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              src={burgerImg}
              alt="Burger"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                transform: hovered ? "scale(1.08)" : "scale(1)",
              }}
            />

            {/* Favorite */}
            <div
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                background: "#fff",
                borderRadius: "50%",
                width: 28,
                height: 28,
                display: hovered ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              }}
            >
              ❤️
            </div>
          </div>

          {/* Content */}
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: "0 0 8px" }}>Classic Burger</h4>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Badge>⭐ 4.8</Badge>
              <strong>120 EGP</strong>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
