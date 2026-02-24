import { type ReactNode, useId, useMemo, useState } from "react";

export type AccordionItem = {
  id?: string; // optional stable id (recommended)
  header: ReactNode; // left side header content
  subheader?: ReactNode; // optional second line
  content: ReactNode; // expanded content
};

type AccordionProps = {
  items: AccordionItem[];
  /** allow multiple items open at once */
  multiple?: boolean;
  /** all collapsed by default if omitted */
  defaultOpenIds?: string[];
  /** optional: render +/- or chevron */
  indicator?: (isOpen: boolean) => ReactNode;
};

export function Accordion({
  items,
  multiple = true,
  defaultOpenIds = [],
  indicator = (isOpen) => (isOpen ? "−" : "+"),
}: AccordionProps) {
  const fallbackId = useId();

  const normalizedItems = useMemo(() => {
    return items.map((item, idx) => ({
      ...item,
      id: item.id ?? `${fallbackId}-item-${idx}`,
    }));
  }, [items, fallbackId]);

  const [open, setOpen] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    for (const id of defaultOpenIds) initial[id] = true;
    return initial;
  });

  const toggle = (id: string) => {
    setOpen((prev) => {
      const next = { ...prev };
      const willOpen = !prev[id];

      if (!multiple) {
        // close all first
        for (const key of Object.keys(next)) next[key] = false;
      }
      next[id] = willOpen;
      return next;
    });
  };

  return (
    <div style={{ display: "grid", gap: "0.75rem" }}>
      {normalizedItems.map((item) => {
        const isOpen = !!open[item.id];

        return (
          <section
            key={item.id}
            style={{
              border: "1px solid var(--border)",
              background: "var(--card)",
              borderRadius: 16,
              padding: "0.9rem 1rem",
            }}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              style={{
                all: "unset",
                cursor: "pointer",
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 16,
              }}
            >
              <div style={{ display: "grid", gap: "0.15rem" }}>
                <div style={{ fontWeight: 700, lineHeight: 1.2 }}>
                  {item.header}
                </div>
                {item.subheader ? (
                  <div style={{ opacity: 0.85 }}>{item.subheader}</div>
                ) : null}
              </div>

              <span
                aria-hidden="true"
                style={{
                  fontSize: "1.25rem",
                  lineHeight: 1,
                  minWidth: 24,
                  textAlign: "right",
                  opacity: 0.9,
                }}
              >
                {indicator(isOpen)}
              </span>
            </button>

            {isOpen ? (
              <div style={{ marginTop: "0.75rem" }}>{item.content}</div>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}