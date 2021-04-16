import { TravelMeans } from './Types'

/**
 * Data from https://www.epa.gov/sites/production/files/2020-04/documents/ghg-emission-factors-hub.pdf
 * Accessed in 2021-04-15
 */
export const TravelEF = {
  [TravelMeans.VEHICLE]: 0.335, // vehicle-mile
  [TravelMeans.MOTORCYCLE]: 0.184, // vehicle-mile
  [TravelMeans.BUS]: 0.053, // passenger-mile
  [TravelMeans.FLYING]: 0.133, // passenger-mile for medium hauls
  [TravelMeans.RAIL]: 0.099, // passenger-mile in urban centers
}
