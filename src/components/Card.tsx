import type { ReactNode } from "react";

type Props = { children: ReactNode };

export function Card({ children }: Props) {
  return (
    <div
      style={{
        border: "1px solid var(--border)",
        background: "var(--card)",
        borderRadius: 16,
        padding: "1rem",
      }}
    >
      {children}
    </div>
  );
}