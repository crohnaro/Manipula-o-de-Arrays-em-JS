const { reverterArray } = require('../exercises/arrayFunctions');

test('reverter a ordem dos elementos do array [1, 2, 3, 4]', () => {
  expect(reverterArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
});

test('reverter a ordem dos elementos do array [0, -1, -2, 5, 8]', () => {
  expect(reverterArray([0, -1, -2, 5, 8])).toEqual([8, 5, -2, -1, 0]);
});

test('retornar um array vazio quando a entrada é um array vazio', () => {
  expect(reverterArray([])).toEqual([]);
});