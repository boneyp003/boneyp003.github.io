import { caseStudies } from "../data/casestudies";
import { CaseStudyCard } from "./CaseStudyCard";
import { Accordion } from "./Accordion";

export function Projects() {
  const items = caseStudies.map((study) => ({
    id: study.id,
    header: study.title,
    subheader: (
      <span>
        <strong>{study.org}</strong>
        {study.timeframe ? ` · ${study.timeframe}` : ""}
      </span>
    ),
    content: <CaseStudyCard study={study} hideHeader />,
  }));

  return (
    <section style={{ display: "grid", gap: "1rem" }}>
      <header style={{ display: "grid", gap: "0.4rem" }}>
        <h2 style={{ margin: 0 }}>Projects / Case Studies</h2>
        <p style={{ margin: 0, opacity: 0.85 }}>
          A small set of deep case studies showing architecture decisions, constraints, and measurable impact.
        </p>
      </header>

      <Accordion items={items} multiple />
    </section>
  );
}