const { filtrarPares } = require('../exercises/arrayFunctions');

test('filtrar os números pares do array [1, 2, 3, 4]', () => {
  expect(filtrarPares([1, 2, 3, 4])).toEqual([2, 4]);
});

test('filtrar os números pares do array [0, -1, -2, 5, 8]', () => {
  expect(filtrarPares([0, -1, -2, 5, 8])).toEqual([0, -2, 8]);
});

test('retornar um array vazio quando não há números pares', () => {
  expect(filtrarPares([1, 3, 5])).toEqual([]);
});