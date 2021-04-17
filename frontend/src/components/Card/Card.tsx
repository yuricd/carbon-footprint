import { Input } from 'antd'
import { Form } from 'antd'
import styles from './Card.module.scss'

interface ICardProps {
  text: string
  picture?: any
  unit?: string
  onlyText?: boolean
  onClick?: () => void
}

export const Card: React.FC<ICardProps> = ({
  text,
  picture,
  onlyText = false,
  unit,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={[styles.card, onlyText ? styles.onlyText : '', 'card'].join(
        ' '
      )}
    >
      {!onlyText ? (
        <>
          <figure>
            <img src={picture} alt={text} />
            <figcaption>{text}</figcaption>
          </figure>
          <Form.Item name={text}>
            <Input type="number" addonAfter={unit} min={0} />
          </Form.Item>
        </>
      ) : (
        <span className={styles.bottomText}>{text}</span>
      )}
    </div>
  )
}
