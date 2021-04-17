export enum TravelMeans {
  VEHICLE = 'Vehicle',
  BUS = 'Bus',
  RAIL = 'Rail',
  MOTORCYCLE = 'Motorcycle',
}

export interface ICalculateEmissionPerYearOptions {
  timesPerWeek: number
  commutingWeeksPerYear: number
}

export type ITravelRequest = { [key in TravelMeans]?: number }
