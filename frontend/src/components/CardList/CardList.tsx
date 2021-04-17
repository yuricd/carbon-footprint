import styles from './CardList.module.scss'

interface ICardListProps {
  children: React.ReactNode
}

export const CardList: React.FC<ICardListProps> = ({ children }) => {
  return <div className={styles.cardList}>{children}</div>
}
