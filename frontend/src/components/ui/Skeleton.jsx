import { colors } from "../../styles/tokens";

export function Skeleton({ height = 20 }) {
  return (
    <div
      style={{
        height,
        background: colors.border,
        borderRadius: 6,
        animation: "pulse 1.5s infinite",
      }}
    />
  );
}
