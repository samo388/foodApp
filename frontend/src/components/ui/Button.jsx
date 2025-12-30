import { colors, radius, spacing } from "../../styles/tokens";

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: colors.primary,
        color: colors.white,
        padding: `${spacing.sm} ${spacing.lg}`,
        border: "none",
        borderRadius: radius.md,
        cursor: "pointer",
        fontWeight: 500,
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
      }}
      onMouseDown={(e) =>
        (e.currentTarget.style.transform = "scale(0.97)")
      }
      onMouseUp={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      {children}
    </button>
  );
}
