## Routes

The API is exposed by default at `http://localhost:3001/carbon-footprint/api`.

### GET /travel-means

```
List the means of transport means available for calculation.
Returns an array of string.
```

### POST /travel-means/calculate-emission

```
Calculate the annual emission from the given transport means.

Payload must be an object in the format: { [mean]: miles }.
Example: {"Vehicle":"4","Bus":"6"}

Return the annual emission of CO<sub>2</sub> in kg.
```

### GET /foods

```
List the foods available for calculation.
Returns an array of string.
```

### POST /foods/calculate-emission

```
Calculate the annual emission from the given transport/travel means.

Payload must be an object in the format: { [food]: [weekly consumption of the food in grams] }.
Example: {"Beef":"1200","Chocolate":"200","Chicken":"1700","Fish":"600","Eggs":"500","Rice":"1600"}

Return the annual emission of CO<sub>2</sub> in kg.
```
