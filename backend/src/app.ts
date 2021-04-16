import express, { Response } from 'express'
import bodyParser from 'body-parser'

const app = express()

// app.use(cors())
app.use(bodyParser.json())

app.get('/', (_, res: Response) => {
  res.send('Pong')
})

app.use(
  '/carbon-footprint/api/travel-means/',
  require('./travel_footprint/Handler')
)
app.use('/carbon-footprint/api/foods/', require('./food_footprint/Handler'))

export default app
