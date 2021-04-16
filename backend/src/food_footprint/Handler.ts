import express, { Request, Response } from 'express'
import { buildResponse } from '../utils/API'
import { listFoods, sumEmissionsPerYear } from './Service'
import { IFoodRequest } from './Types'

const router = express.Router()

router.post('/calculateEmission', (req: Request, res: Response) => {
  try {
    const body: IFoodRequest = req.body
    const emission = sumEmissionsPerYear(body)
    buildResponse({ statusCode: 200, success: true, data: emission, res })
  } catch (err) {
    buildResponse({ statusCode: 500, data: err, res })
  }
})

router.get('/', (_, res: Response) => {
  try {
    const foods = listFoods()
    buildResponse({ statusCode: 200, success: true, data: foods, res })
  } catch (err) {
    buildResponse({ statusCode: 500, data: err, res })
  }
})

module.exports = router
