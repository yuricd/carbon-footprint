import request from 'supertest'
import app from '../app'
import { API_URI } from '../config'
import { IFoodRequest } from './Types'

describe('FoodHandler', () => {
  describe('getFoods', () => {
    it('should get the list of foods', async (done) => {
      request(app)
        .get(`${API_URI}foods`)
        .expect(200)
        .end((err) => {
          if (err) return done(err)
          done()
        })
    })
  })

  describe('calculateEmission', () => {
    it('should calculate the food emission', async (done) => {
      const payload: IFoodRequest = {
        Chocolate: 10000,
      }
      request(app)
        .post(`${API_URI}foods/calculateEmission`)
        .send(payload)
        .expect(200)
        .end((err) => {
          if (err) return done(err)
          done()
        })
    })
  })
})
