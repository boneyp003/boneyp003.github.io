import { useState } from 'react'
import { experience } from '../data/experience'

export function Experience() {
  // Empty object = all collapsed on load
  const [open, setOpen] = useState<Record<number, boolean>>({})

  const toggle = (idx: number) => {
    setOpen((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }))
  }

  return (
    <section style={{ marginTop: '3rem' }}>
      <h2>Professional Experience</h2>

      {experience.map((job, idx) => {
        const isOpen = !!open[idx]

        return (
          <article key={idx} className="card" style={{ marginTop: '1rem' }}>
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              style={{
                all: 'unset',
                cursor: 'pointer',
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <div>
                <h3 style={{ margin: 0 }}>
                  {job.role} · {job.company}
                </h3>
                <p style={{ margin: '0.4rem 0 0', color: 'var(--muted)' }}>
                  {job.location} · {job.dates}
                </p>
              </div>

              <span
                aria-hidden="true"
                style={{
                  fontSize: 18,
                  padding: '6px 10px',
                  borderRadius: 999,
                  border: '1px solid var(--border)',
                  color: 'var(--muted)',
                }}
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {isOpen && (
              <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
                {job.bullets.map((b, i) => (
                  <li key={i} style={{ marginBottom: 8 }}>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </article>
        )
      })}
    </section>
  )
}
