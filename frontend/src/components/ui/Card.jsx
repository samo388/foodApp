import { colors, spacing } from "../../styles/tokens";

export function Card({ children, hoverable = true }) {
  return (
    <div
      style={{
        background: colors.surface,
        borderRadius: 16,
        padding: spacing.lg,
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
        transition: "all 0.25s ease",
        cursor: hoverable ? "pointer" : "default",
      }}
      onMouseEnter={(e) => {
        if (!hoverable) return;
        e.currentTarget.style.boxShadow =
          "0 12px 32px rgba(0,0,0,0.12)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        if (!hoverable) return;
        e.currentTarget.style.boxShadow =
          "0 6px 18px rgba(0,0,0,0.06)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return (
    <div
      style={{
        marginBottom: spacing.md,
        fontWeight: 600,
        fontSize: 16,
      }}
    >
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
