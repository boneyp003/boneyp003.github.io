import styles from './Nav.module.css'
export type PageId = 'home' | 'experience' | 'projects' | 'contact'

type NavProps = {
  active: PageId
  onChange: (id: PageId) => void
}

export default function Nav({ active, onChange }: NavProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <span className={styles.brand}>Boney Y Patel</span>

        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.btn} ${active === 'home' ? styles.active : ''}`}
            onClick={() => onChange('home')}>Home</button>

          <button
            type="button"
            className={`${styles.btn} ${active === 'experience' ? styles.active : ''}`}
            onClick={() => onChange('experience')}>Experience</button>

          <button
            type="button"
            className={`${styles.btn} ${active === 'projects' ? styles.active : ''}`}
            onClick={() => onChange("projects")}>Projects</button>
        </div>
      </div>
    </nav>
  )
}
