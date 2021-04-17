import { FoodEF } from './Constants'
import { FoodFootprintService } from './Service'
import { IFoodRequest, Foods } from './Types'

describe('Food', () => {
  const {
    calculateEmissionPerYear,
    sumEmissionsPerYear,
    listFoods,
  } = FoodFootprintService()

  describe('calculateEmissionPerYear', () => {
    it('should calculate carbon footprint for 150g of chocolate', () => {
      const WEIGHT = 150
      const EF = FoodEF[Foods.CHOCOLATE]
      const res = calculateEmissionPerYear(WEIGHT, EF)
      expect(res).toEqual((WEIGHT / 1000) * EF * 52)
    })

    it('should calculate carbon footprint for 800000g of beef', () => {
      const WEIGHT = 800000
      const EF = FoodEF[Foods.BEEF]
      const res = calculateEmissionPerYear(WEIGHT, EF)
      expect(res).toEqual((WEIGHT / 1000) * EF * 52)
    })
  })

  describe('sumEmissionsPerYear', () => {
    it('should sum emissions per year for 2kg of chicken', () => {
      const FOOD = Foods.CHICKEN
      const WEIGHT = 2000
      const data: IFoodRequest = {
        [FOOD]: WEIGHT,
      }
      const totalEmission = sumEmissionsPerYear(data)
      const expected = calculateEmissionPerYear(WEIGHT, FoodEF[FOOD])
      expect(totalEmission).toBe(expected.toFixed(2))
    })

    it('should sum emissions per year for 2kg of chicken, 1kg of fish and 3kg of rice weekly', () => {
      const WEIGHT_CHICKEN = 2000
      const WEIGHT_FISH = 1000
      const WEIGHT_RICE = 3000
      const data: IFoodRequest = {
        [Foods.CHICKEN]: WEIGHT_CHICKEN,
        [Foods.FISH]: WEIGHT_FISH,
        [Foods.RICE]: WEIGHT_RICE,
      }
      const totalEmission = sumEmissionsPerYear(data)
      const expected =
        calculateEmissionPerYear(WEIGHT_CHICKEN, FoodEF[Foods.CHICKEN]) +
        calculateEmissionPerYear(WEIGHT_FISH, FoodEF[Foods.FISH]) +
        calculateEmissionPerYear(WEIGHT_RICE, FoodEF[Foods.RICE])
      expect(totalEmission).toBe(expected.toFixed(2))
    })
  })

  describe('listFoods', () => {
    it('should list all foods', () => {
      // important to be 9 because frontend bind images to each food
      const foods = listFoods()
      expect(foods.length).toBe(9)
    })
  })
})
