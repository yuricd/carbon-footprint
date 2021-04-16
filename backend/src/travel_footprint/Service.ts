import { TravelEF } from './Constants'
import {
  ICalculateEmissionPerYearOptions,
  ITravelRequest,
  TravelMeans,
} from './Types'

/**
 *
 * @param twoWayDistance in miles
 * @param EF emission factor in kg of CO2 per mile
 * @param options may receive an EF to be used
 * @returns emission of CO2 in kg per year
 * Based on https://ghgprotocol.org/sites/default/files/standards/Scope3_Calculation_Guidance_0.pdf
 * p. 89, Calculation formula [7.1] Distance-based method
 */
export const calculateEmissionPerYear = (
  twoWayDistance: number,
  EF: number,
  options: ICalculateEmissionPerYearOptions = {
    timesPerWeek: 5,
    commutingWeeksPerYear: 48,
  }
) => {
  const { timesPerWeek, commutingWeeksPerYear } = options
  return twoWayDistance * timesPerWeek * commutingWeeksPerYear * EF
}

export const sumEmissionsPerYear = (data: ITravelRequest) => {
  const totalEmission = Object.entries(data).reduce((acc, curr) => {
    const [travelMean, miles] = curr as [TravelMeans, number]
    const EF = TravelEF[travelMean]
    const emissionPerYear = calculateEmissionPerYear(miles, EF)
    return acc + emissionPerYear
  }, 0)

  return totalEmission.toFixed(2)
}

export const listMeans = () => {
  return Object.values(TravelMeans)
}
