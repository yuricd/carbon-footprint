import express, { Request, Response } from 'express'
import { buildResponse } from '../utils/API'
import { TravelFootprintService } from './Service'
import { ITravelRequest } from './Types'

const router = express.Router()

const Service = TravelFootprintService()

router.post('/calculate-emission', (req: Request, res: Response) => {
  try {
    const body: ITravelRequest = req.body
    const emission = Service.sumEmissionsPerYear(body)
    buildResponse({ statusCode: 200, success: true, data: emission, res })
  } catch (err) {
    buildResponse({ statusCode: 500, data: err, res })
  }
})

router.get('/', (_, res: Response) => {
  try {
    const means = Service.listMeans()
    buildResponse({ statusCode: 200, success: true, data: means, res })
  } catch (err) {
    buildResponse({ statusCode: 500, data: err, res })
  }
})

module.exports = router
