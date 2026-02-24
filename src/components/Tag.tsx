type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.25rem 0.5rem",
        borderRadius: "999px",
        border: "1px solid var(--border)",
        background: "var(--card)",
        fontSize: "0.85rem",
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}