import { Form, message } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config'
import { Card } from '../Card/Card'
import { CardList } from '../CardList/CardList'
import { ErrorHandler } from '../ErrorHandler/ErrorHandler'
import Beef from '../../assets/beef.svg'
import Chocolate from '../../assets/chocolate.svg'
import Coffee from '../../assets/coffee.svg'
import Cheese from '../../assets/cheese.svg'
import Chicken from '../../assets/chicken.svg'
import Fish from '../../assets/fish.svg'
import Eggs from '../../assets/egg.svg'

import Rice from '../../assets/rice.svg'
import Nuts from '../../assets/nuts.svg'

import styles from './Food.module.scss'
import { Result } from '../Result/Result'
import { RenderSkeleton } from '../Skeleton/Skeleton'

export const Food: React.FC = () => {
  const [foods, setFoods] = useState<string[]>([])
  const [foodsError, setFoodsError] = useState<boolean>(false)
  const [isLoadingFoods, setIsLoadingFoods] = useState<boolean>(true)
  const [result, setResult] = useState<number>()
  const [isCalculating, setIsCalculating] = useState<boolean>(false)

  useEffect(() => {
    fetchFoods()
  }, [])

  const [form] = Form.useForm()

  return (
    <div className={styles.food}>
      <ErrorHandler
        thrownError={foodsError}
        errorDescription="There is a problem to load the foods. Please, try again in a few minutes."
      >
        <p>
          How much of each food do you consume <strong>weekly</strong>?
        </p>

        <div className={styles.content}>
          <Form form={form} onFinish={handleSubmit}>
            <CardList>
              {isLoadingFoods ? (
                <RenderSkeleton />
              ) : (
                <>
                  {foods.map((food, idx) => (
                    <Card
                      key={idx}
                      text={food}
                      picture={Pictures[food]}
                      unit="grams"
                    />
                  ))}
                  <Card
                    onClick={handleSubmit}
                    text={result ? 'Recalculate' : 'Calculate'}
                    onlyText={true}
                  />
                </>
              )}
            </CardList>
          </Form>
        </div>

        {isCalculating && <p>Calculating your emission...</p>}

        {!isCalculating && result && <Result result={result} />}
      </ErrorHandler>
    </div>
  )

  async function fetchFoods() {
    setIsLoadingFoods(true)
    try {
      const { data } = await axios.get(`${API_URL}foods`)
      if (data.data && data.success) {
        const foodList = data.data.split(',')
        setFoods(foodList)
      }
    } catch (err) {
      console.error(err)
      setFoodsError(true)
    } finally {
      setIsLoadingFoods(false)
    }
  }

  async function handleSubmit() {
    setIsCalculating(true)
    try {
      const values = form.getFieldsValue()
      const { data } = await axios.post(
        `${API_URL}foods/calculate-emission`,
        values
      )

      const totalEmission = data.data

      if (data.success && totalEmission) {
        setResult(totalEmission)
      }
    } catch (err) {
      message.error(err ?? 'Failed to calculate emissions.')
    } finally {
      setIsCalculating(false)
    }
  }
}

const Pictures: { [k: string]: string } = {
  Beef,
  Chocolate,
  Coffee,
  Cheese,
  Chicken,
  Fish,
  Eggs,
  Rice,
  Nuts,
}
