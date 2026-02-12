import styles from './Hero.module.css'
import { urls } from '../data/urls'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrap}>
        <img src="/hero.jpg" alt="Boney Patel" className={styles.image}/>
      </div>
      <div className={styles.content}>
        <h1>Boney Yogeshbhai Patel</h1>
        <p className={styles.subtitle}>
          Software Engineer · Full-Stack · Cloud Platforms · Team Leadership
        </p>

        <p className={styles.summary}>
          I build scalable, secure, cloud-native applications with React, .NET, and AWS.
        </p>
        <p className={styles.summary}>
          I specialize in modernizing complex systems, leading cross-functional teams,
          and delivering high-impact platforms used at national scale.
        </p>

        <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem', justifyContent: 'center', display: 'flex', gap: 25, flexWrap: 'wrap' }}>
          <a href={urls.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={urls.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>


      </div>


    </section>
  )
}
