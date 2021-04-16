import { FoodEF } from './Constants'
import { Foods, IFoodRequest } from './Types'
/**
 * Based on https://ghgprotocol.org/sites/default/files/standards/Scope3_Calculation_Guidance_0.pdf
 * p. 89, Calculation formula [7.1] Distance-based method
 * @param gramsPerWeek grams of food per week
 * @param EF emission factor in kg of CO2 per kg of food
 * @param options may receive an EF to be used
 * @returns emission of CO2 in kg per year
 */
export const calculateEmissionPerYear = (gramsPerWeek: number, EF: number) => {
  const WEEKS_IN_YEAR = 52
  const kgPerWeek = gramsPerWeek / 1000
  return kgPerWeek * WEEKS_IN_YEAR * EF
}

export const sumEmissionsPerYear = (data: IFoodRequest) => {
  const totalEmission = Object.entries(data).reduce((acc, curr) => {
    const [food, weight] = curr as [Foods, number]
    const EF = FoodEF[food]
    const emissionPerYear = calculateEmissionPerYear(weight, EF)
    return acc + emissionPerYear
  }, 0)

  return totalEmission.toFixed(2)
}

export const listFoods = () => {
  return Object.values(Foods)
}
