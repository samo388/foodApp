import { colors, spacing } from "../../styles/tokens";

export function Badge({ children, variant = "default" }) {
  const styles = {
    default: {
      background: colors.primary,
      color: "#fff",
    },
    success: {
      background: "green",
      color: "#fff",
    },
    warning: {
      background: "orange",
      color: "#fff",
    },
  };

  return (
    <span
      style={{
        padding: "4px 8px",
        borderRadius: 8,
        fontSize: 12,
        ...styles[variant],
      }}
    >
      {children}
    </span>
  );
}
