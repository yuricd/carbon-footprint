export enum Foods {
  BEEF = 'Beef',
  CHOCOLATE = 'Chocolate',
  COFFEE = 'Coffee',
  CHEESE = 'Cheese',
  CHICKEN = 'Chicken',
  FISH = 'Fish',
  EGGS = 'Eggs',
  RICE = 'Rice',
  NUTS = 'Nuts',
}

export type IFoodRequest = { [key in Foods]?: number }
