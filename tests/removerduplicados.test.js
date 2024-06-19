const { removerDuplicados } = require('../exercises/arrayFunctions');

test('remover elementos duplicados do array [1, 2, 3, 4, 4, 3]', () => {
  expect(removerDuplicados([1, 2, 3, 4, 4, 3])).toEqual([1, 2, 3, 4]);
});

test('remover elementos duplicados do array [0, -1, -2, 5, 8, 0, 5]', () => {
  expect(removerDuplicados([0, -1, -2, 5, 8, 0, 5])).toEqual([0, -1, -2, 5, 8]);
});

test('retornar um array vazio quando a entrada é um array vazio', () => {
  expect(removerDuplicados([])).toEqual([]);
});