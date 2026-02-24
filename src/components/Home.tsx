import Hero from "./Hero";
import { caseStudies } from "../data/caseStudies";
import { stats, pillars, stack } from "../data/home";
import { Section } from "./Section";
import { Card } from "./Card";
import { Stat } from "./Stat";

type Props = {
  onNavigate: (page: "projects" | "contact") => void;
};

export function Home({ onNavigate }: Props) {
  const featured = caseStudies.slice(0, 3);

  return (
    <div style={{ display: "grid", gap: "2rem" }}>
      <Hero />

      <Section
        title="What I build"
        subtitle="I focus on outcomes: secure platforms, faster delivery, and systems that scale."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
          }}
        >
          {pillars.map((p) => (
            <Card key={p.title}>
              <div style={{ fontWeight: 800, marginBottom: "0.35rem" }}>{p.title}</div>
              <div style={{ opacity: 0.85 }}>{p.body}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Proof" subtitle="A few metrics that reflect real production impact.">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Section>

      <Section
        title="Featured case studies"
        subtitle="Deep dives into architecture decisions, constraints, and measurable impact."
      >
        <div style={{ display: "grid", gap: "1rem" }}>
          {featured.map((cs) => (
            <Card key={cs.id}>
              <div style={{ display: "grid", gap: "0.25rem" }}>
                <div style={{ fontWeight: 900 }}>{cs.title}</div>
                <div style={{ opacity: 0.85 }}>
                  <strong>{cs.org}</strong>
                  {cs.timeframe ? ` · ${cs.timeframe}` : ""}
                </div>
                <div style={{ opacity: 0.9, marginTop: "0.25rem" }}>
                  <strong>Impact:</strong> {cs.highlights[0]}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: "0.5rem" }}>
          <button
            type="button"
            onClick={() => onNavigate("projects")}
            style={{
              border: "1px solid var(--border)",
              background: "var(--card)",
              color: "var(--text)",
              padding: "0.6rem 0.9rem",
              borderRadius: 12,
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            View all case studies
          </button>
          <button
            type="button"
            onClick={() => onNavigate("contact")}
            style={{
              border: "1px solid var(--border)",
              background: "transparent",
              color: "var(--text)",
              padding: "0.6rem 0.9rem",
              borderRadius: 12,
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            Contact
          </button>
        </div>
      </Section>

      <Section title="Core stack" subtitle="What I build production systems with.">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {stack.map((t) => (
            <span
              key={t}
              style={{
                border: "1px solid var(--border)",
                background: "var(--card)",
                padding: "0.35rem 0.6rem",
                borderRadius: 999,
                fontSize: "0.9rem",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </Section>

      <section
        style={{
          border: "1px solid var(--border)",
          background: "var(--card)",
          borderRadius: 16,
          padding: "1.25rem",
          display: "grid",
          gap: "0.6rem",
        }}
      >
        <div style={{ fontWeight: 900, fontSize: "1.1rem" }}>
          Want the architecture and tradeoffs?
        </div>
        <div style={{ opacity: 0.85 }}>
          Start with the case studies. If you’re hiring or want help modernizing a platform, reach out.
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: "0.25rem" }}>
          <button
            type="button"
            onClick={() => onNavigate("projects")}
            style={{
              border: "1px solid var(--border)",
              background: "var(--bg)",
              color: "var(--text)",
              padding: "0.6rem 0.9rem",
              borderRadius: 12,
              cursor: "pointer",
              fontWeight: 800,
            }}
          >
            Read case studies
          </button>

        </div>
      </section>
    </div>
  );
}