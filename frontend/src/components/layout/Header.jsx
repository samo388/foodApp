import { spacing, colors } from "../../styles/tokens";

export default function Header({ onMenuClick }) {
  return (
    <header
      style={{
        height: 64,
        backgroundColor: colors.surface,
        display: "flex",
        alignItems: "center",
        padding: `0 ${spacing.lg}`,
        borderBottom: "1px solid #eee",
      }}
    >
      <button
        onClick={onMenuClick}
        style={{
          fontSize: 20,
          background: "none",
          border: "none",
          cursor: "pointer",
          marginRight: spacing.md,
        }}
      >
        ☰
      </button>

      <h3 style={{ margin: 0 }}>Dashboard</h3>
    </header>
  );
}
