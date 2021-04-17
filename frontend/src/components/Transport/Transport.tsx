import { Form, message } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config'
import { Card } from '../Card/Card'
import { CardList } from '../CardList/CardList'
import { ErrorHandler } from '../ErrorHandler/ErrorHandler'
import Vehicle from '../../assets/vehicle.svg'
import Motorcycle from '../../assets/motorcycle.svg'
import Bus from '../../assets/bus.svg'
import Rail from '../../assets/rail.svg'
import Flying from '../../assets/flying.svg'

import styles from './Transport.module.scss'
import { Result } from '../Result/Result'
import { RenderSkeleton } from '../Skeleton/Skeleton'
import { client } from '../../client'

export const Transport: React.FC = () => {
  const [means, setMeans] = useState<string[]>([])
  const [meansError, setMeansError] = useState<boolean>(false)
  const [isLoadingMeans, setIsLoadingMeans] = useState<boolean>(true)
  const [result, setResult] = useState<number>()
  const [isCalculating, setIsCalculating] = useState<boolean>(false)

  useEffect(() => {
    fetchMeans()
  }, [])

  const [form] = Form.useForm()

  return (
    <div className={styles.transport}>
      <ErrorHandler
        thrownError={meansError}
        errorDescription="There is a problem to load the travel means. Please, try again in a few minutes."
      >
        <p>
          How many miles do you commute <strong>daily</strong> (two-way) in each
          mean of transport?
        </p>

        <div className={styles.content}>
          <Form form={form} onFinish={handleSubmit}>
            <CardList>
              {isLoadingMeans ? (
                <RenderSkeleton />
              ) : (
                <>
                  {means.map((mean, idx) => (
                    <Card
                      key={idx}
                      text={mean}
                      picture={Pictures[mean]}
                      unit="miles"
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

  async function fetchMeans() {
    setIsLoadingMeans(true)
    try {
      const { data } = await client.get('travel-means')
      if (data.data && data.success) {
        const meanList = data.data.split(',')
        setMeans(meanList)
      }
    } catch (err) {
      console.error(err)
      setMeansError(true)
    } finally {
      setIsLoadingMeans(false)
    }
  }

  async function handleSubmit() {
    setIsCalculating(true)
    try {
      const values = form.getFieldsValue()
      const { data } = await client.post(
        'travel-means/calculate-emission',
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
  Vehicle,
  Bus,
  Motorcycle,
  Rail,
  Flying,
}
