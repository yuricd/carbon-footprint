import request from 'supertest'
import app from '../app'
import { API_URI } from '../config'
import { ITravelRequest } from './Types'

describe('TravelHandler', () => {
  describe('getTravelMeans', () => {
    it('should get the list of travel means', async (done) => {
      request(app)
        .get(`${API_URI}travel-means`)
        .expect(200)
        .end((err) => {
          if (err) return done(err)
          done()
        })
    })
  })

  describe('calculateEmission', () => {
    it('should calculate the food emission', async (done) => {
      const payload: ITravelRequest = {
        Rail: 5266,
      }
      request(app)
        .post(`${API_URI}travel-means/calculate-emission`)
        .send(payload)
        .expect(200)
        .end((err) => {
          if (err) return done(err)
          done()
        })
    })
  })
})
