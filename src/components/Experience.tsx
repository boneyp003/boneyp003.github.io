import { experience } from "../data/experience";
import { Accordion } from "./Accordion";

export function Experience() {
  const items = experience.map((job, idx) => ({
    id: `${job.company}-${job.role}-${idx}`, // stable enough for your data
    header: (
      <span>
        {job.role} · {job.company}
      </span>
    ),
    subheader: (
      <span>
        {job.location} · {job.dates}
      </span>
    ),
    content: (
      <ul style={{ margin: 0, paddingLeft: "1.1rem", display: "grid", gap: "0.35rem" }}>
        {job.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    ),
  }));

  return (
    <section style={{ display: "grid", gap: "0.75rem" }}>
      <h2 style={{ margin: 0 }}>Professional Experience</h2>
      <Accordion items={items} multiple />
    </section>
  );
}