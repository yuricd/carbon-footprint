import styles from './Result.module.scss'

interface IResultProps {
  category: string
  result: number
}

export const Result: React.FC<IResultProps> = ({ category, result }) => {
  return (
    <div className={styles.result}>
      <p>
        Your annual CO<sub>2</sub> emission with {category} is{' '}
        <strong>{result}</strong> kg.
      </p>
    </div>
  )
}
