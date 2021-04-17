import styles from './Presentation.module.scss'

export const Presentation: React.FC = () => {
  return (
    <div className={styles.presentation}>
      <h1>Calculate your carbon footprint</h1>
      <footer>
        <p>
          <a
            href="https://yuridelgado.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yuri Delgado
          </a>
        </p>
        <p className={styles.credits}>
          <a href="https://icons8.com/">Icons from Icons8</a>
        </p>
      </footer>
    </div>
  )
}
