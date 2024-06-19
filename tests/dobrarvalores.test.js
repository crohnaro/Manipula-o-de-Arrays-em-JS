const { dobrarValores } = require('../exercises/arrayFunctions');

test('dobrar os valores do array [1, 2, 3]', () => {
  expect(dobrarValores([1, 2, 3])).toEqual([2, 4, 6]);
});

test('dobrar os valores do array [0, -1, 5]', () => {
  expect(dobrarValores([0, -1, 5])).toEqual([0, -2, 10]);
});

test('retornar um array vazio quando a entrada é um array vazio', () => {
  expect(dobrarValores([])).toEqual([]);
});