export interface IFootprintService {
  calculateEmissionPerYear: (...args: any[]) => number
  sumEmissionsPerYear: (...args: any[]) => string
}
