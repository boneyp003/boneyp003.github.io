import styles from './Nav.module.css'
export type PageId = 'home' | 'experience' | 'contact'

type NavProps = {
  active: PageId
  onChange: (id: PageId) => void
}

export default function Nav({ active, onChange }: NavProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <span className={styles.brand}>Boney Patel</span>

        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.btn} ${active === 'home' ? styles.active : ''}`}
            onClick={() => onChange('home')}
          >
            Home
          </button>

          <button
            type="button"
            className={`${styles.btn} ${active === 'experience' ? styles.active : ''}`}
            onClick={() => onChange('experience')}
          >
            Experience
          </button>
        </div>
      </div>
    </nav>
  )
}
