import styles from './ThemeToggle.module.css'

type Props = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export default function ThemeToggle({ theme, toggleTheme }: Props) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title="Toggle theme"
      className={styles.toggle}
    >
      <span className={styles.icon}>
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
      <span className={styles.label}>
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
    </button>
  )
}
