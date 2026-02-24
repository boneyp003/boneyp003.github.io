type Props = {
  value: string;
  label: string;
};

export function Stat({ value, label }: Props) {
  return (
    <div
      style={{
        border: "1px solid var(--border)",
        background: "var(--card)",
        borderRadius: 16,
        padding: "1rem",
      }}
    >
      <div style={{ fontSize: "1.4rem", fontWeight: 800, lineHeight: 1.1 }}>
        {value}
      </div>
      <div style={{ opacity: 0.85, marginTop: "0.35rem" }}>{label}</div>
    </div>
  );
}