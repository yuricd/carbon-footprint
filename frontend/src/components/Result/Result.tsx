import styles from './Result.module.scss'

interface IResultProps {
  result: number
}

export const Result: React.FC<IResultProps> = ({ result }) => {
  return (
    <div className={styles.result}>
      <p>
        Your annual CO<sub>2</sub> emission is <strong>{result}</strong> kg.
      </p>
    </div>
  )
}
