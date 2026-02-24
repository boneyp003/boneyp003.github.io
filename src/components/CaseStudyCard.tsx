import type { CaseStudy } from "../data/casestudies";
import { Tag } from "./Tag";

type Props = {
  study: CaseStudy;
  hideHeader?: boolean;
};

export function CaseStudyCard({ study, hideHeader = false }: Props) {
  return (
    <article
      style={{
        border: "1px solid var(--border)",
        background: "var(--card)",
        borderRadius: "16px",
        padding: "1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.9rem",
      }}
    >
      {!hideHeader ? (
        <header style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <h3 style={{ margin: 0, fontSize: "1.25rem" }}>{study.title}</h3>
          <p style={{ margin: 0, opacity: 0.85 }}>{study.subtitle}</p>

          <div style={{ marginTop: "0.25rem", opacity: 0.8, fontSize: "0.95rem" }}>
            <div>
              <strong>{study.org}</strong>
            </div>
            {study.timeframe ? <div>{study.timeframe}</div> : null}
          </div>
        </header>
      ) : null}

      {/* Highlights */}
      <section
        style={{
          border: "1px solid var(--border)",
          background: "var(--bg)",
          borderRadius: "12px",
          padding: "0.9rem",
        }}
      >
        <div style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
          Impact Highlights
        </div>
        <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: "0.25rem" }}>
          {study.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      {/* Tags */}
      <section style={{ display: "grid", gap: "0.6rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {study.domainTags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", opacity: 0.95 }}>
          {study.techTags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      </section>

      {/* Sections */}
      <section style={{ display: "grid", gap: "0.9rem" }}>
        {study.sections.map((s) => (
          <div key={s.heading}>
            <div style={{ fontWeight: 700, marginBottom: "0.35rem" }}>{s.heading}</div>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: "0.25rem" }}>
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <footer style={{ marginTop: "0.25rem", opacity: 0.8, fontSize: "0.9rem" }}>
        Next upgrade: add a simple architecture diagram for this system.
      </footer>
    </article>
  );
}