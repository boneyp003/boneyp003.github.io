import { useEffect, useState } from 'react'
import { applySeo } from "./seo";
import { applyTheme, getInitialTheme, type Theme } from './theme'
import Nav, { type PageId } from './components/Nav'
import { Experience } from './components/Experience'
import Hero from './components/Hero'
import { Projects } from "./components/Projects"
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])



  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }

  const [page, setPage] = useState<PageId>('home')

  useEffect(() => {
    applySeo(page);
  }, [page]);


  return (
    <>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <Nav active={page} onChange={setPage} />
      <main style={{ padding: '2.5rem', maxWidth: 980, margin: '0 auto' }}>
        {page === 'home' && (
          <section><Hero /></section>
        )}

        {page === 'experience' && (
          <section>
            <Experience />
          </section>
        )}

        {page === 'projects' && (
          <section>
            <Projects />
          </section>
        )}

        {page === 'contact' &&
          (<section className="card" style={{ marginTop: '2rem' }}>
            <h2 style={{ marginTop: 0 }}>Contact</h2>
            <p style={{ color: 'var(--muted)' }}>
              Reach me fastest on LinkedIn or email.
            </p>
          </section>)}
      </main>
    </>
  )
}
