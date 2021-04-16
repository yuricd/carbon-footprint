import { TravelEF } from './Constants'
import { calculateEmissionPerYear, sumEmissionsPerYear } from './Service'
import { ITravelRequest, TravelMeans } from './Types'

describe('Travel', () => {
  describe('calculateEmissionPerYear', () => {
    it('should calculate carbon footprint for integer distance', () => {
      const TWO_WAY_DISTANCE = 16
      const EF = TravelEF[TravelMeans.VEHICLE]
      const res = calculateEmissionPerYear(TWO_WAY_DISTANCE, EF, {
        commutingWeeksPerYear: 1,
        timesPerWeek: 1,
      })
      expect(res).toEqual(TWO_WAY_DISTANCE * EF)
    })

    it('should calculate carbon footprint for decimal distance', () => {
      const TWO_WAY_DISTANCE = 17.3
      const EF = TravelEF[TravelMeans.VEHICLE]
      const res = calculateEmissionPerYear(TWO_WAY_DISTANCE, EF, {
        commutingWeeksPerYear: 1,
        timesPerWeek: 1,
      })
      expect(res).toEqual(TWO_WAY_DISTANCE * EF)
    })
  })

  describe('sumEmissionsPerYear', () => {
    it('should sum emissions per year of only one vehicle', () => {
      const TRAVEL_MEAN = TravelMeans.VEHICLE
      const DISTANCE = 17.3
      const data: ITravelRequest = {
        [TRAVEL_MEAN]: DISTANCE,
      }
      const totalEmission = sumEmissionsPerYear(data)
      const expected = calculateEmissionPerYear(DISTANCE, TravelEF[TRAVEL_MEAN])
      expect(totalEmission).toBe(expected.toFixed(2))
    })

    it('should sum emissions per year of only one motorcycle', () => {
      const TRAVEL_MEAN = TravelMeans.MOTORCYCLE
      const DISTANCE = 59.3
      const data: ITravelRequest = {
        [TRAVEL_MEAN]: DISTANCE,
      }
      const totalEmission = sumEmissionsPerYear(data)
      const expected = calculateEmissionPerYear(DISTANCE, TravelEF[TRAVEL_MEAN])
      expect(totalEmission).toBe(expected.toFixed(2))
    })

    it('should sum emissions per year of many means', () => {
      const DISTANCE_1 = 6
      const DISTANCE_2 = 12
      const DISTANCE_3 = 7

      const data: ITravelRequest = {
        [TravelMeans.MOTORCYCLE]: DISTANCE_1,
        [TravelMeans.RAIL]: DISTANCE_2,
        [TravelMeans.BUS]: DISTANCE_3,
      }
      const totalEmission = sumEmissionsPerYear(data)
      const expected =
        calculateEmissionPerYear(DISTANCE_1, TravelEF[TravelMeans.MOTORCYCLE]) +
        calculateEmissionPerYear(DISTANCE_2, TravelEF[TravelMeans.RAIL]) +
        calculateEmissionPerYear(DISTANCE_3, TravelEF[TravelMeans.BUS])
      expect(totalEmission).toBe(expected.toFixed(2))
    })
  })

  describe('listMeans', () => {
    it('should list all travel means', () => {
      const listMeans = Object.keys(TravelMeans)
      expect(listMeans.length).toBeGreaterThan(0)
    })
  })
})
