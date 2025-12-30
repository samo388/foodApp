export default function DashboardSkeleton() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            height: 80,
            background: "#eaeaea",
            borderRadius: 12,
            animation: "pulse 1.5s infinite",
          }}
        />
      ))}
    </div>
  );
}
