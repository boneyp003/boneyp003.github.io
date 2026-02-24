import { type ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ title, subtitle, children }: Props) {
  return (
    <section style={{ display: "grid", gap: "0.75rem" }}>
      <header style={{ display: "grid", gap: "0.25rem" }}>
        <h2 style={{ margin: 0 }}>{title}</h2>
        {subtitle ? <p style={{ margin: 0, opacity: 0.85 }}>{subtitle}</p> : null}
      </header>
      {children}
    </section>
  );
}