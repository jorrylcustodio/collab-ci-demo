const { convertUnits } = require('./convertUtils'); // Assume refactored logic

test('liters to gallons conversion', () => {
  expect(convertUnits(1, 'liters', 'gallons')).toBeCloseTo(0.264172, 5);
});

test('gallons to liters conversion', () => {
  expect(convertUnits(1, 'gallons', 'liters')).toBeCloseTo(3.78541, 5);
});

test('milliliters to fluid ounces conversion', () => {
  expect(convertUnits(1000, 'milliliters', 'fluidOunces')).toBeCloseTo(33.814, 3);
});

test('fluid ounces to milliliters conversion', () => {
  expect(convertUnits(1, 'fluidOunces', 'milliliters')).toBeCloseTo(29.5735, 3);
});
