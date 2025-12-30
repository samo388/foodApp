import { Card } from "../ui/Card";

export function CategoryCard({ title, icon }) {
  return (
    <Card>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 32 }}>{icon}</div>
        <h4 style={{ marginTop: 12 }}>{title}</h4>
      </div>
    </Card>
  );
}
