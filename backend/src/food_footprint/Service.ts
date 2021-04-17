import { IFootprintService } from '../utils/Types'
import { FoodEF } from './Constants'
import { Foods, IFoodRequest } from './Types'

interface IFoodFootprintService extends IFootprintService {
  listFoods: () => string[]
}

export const FoodFootprintService = ({} = {}): IFoodFootprintService => {
  return {
    calculateEmissionPerYear,
    sumEmissionsPerYear,
    listFoods,
  }
  /**
   * @param gramsPerWeek grams of food per week
   * @param EF emission factor in kg of CO2 per kg of food
   * @returns emission of CO2 in kg per year
   */
  function calculateEmissionPerYear(gramsPerWeek: number, EF: number) {
    const WEEKS_IN_YEAR = 52
    const kgPerWeek = gramsPerWeek / 1000
    return kgPerWeek * WEEKS_IN_YEAR * EF
  }

  function sumEmissionsPerYear(data: IFoodRequest) {
    const totalEmission = Object.entries(data).reduce((acc, curr) => {
      const [food, weight] = curr as [Foods, number]
      const EF = FoodEF[food]
      const emissionPerYear = calculateEmissionPerYear(weight, EF)
      return acc + emissionPerYear
    }, 0)

    return totalEmission.toFixed(2)
  }

  function listFoods() {
    return Object.values(Foods)
  }
}
