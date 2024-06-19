const { somarElementos } = require('../exercises/arrayFunctions');

test('somar os elementos do array [1, 2, 3, 4]', () => {
  expect(somarElementos([1, 2, 3, 4])).toBe(10);
});

test('somar os elementos do array [0, -1, -2, 5, 8]', () => {
  expect(somarElementos([0, -1, -2, 5, 8])).toBe(10);
});

test('retornar 0 para um array vazio', () => {
  expect(somarElementos([])).toBe(0);
});