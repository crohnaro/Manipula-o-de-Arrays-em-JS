const { maiorNumero } = require('../exercises/arrayFunctions');

test('encontrar o maior número do array [1, 2, 3, 4]', () => {
  expect(maiorNumero([1, 2, 3, 4])).toBe(4);
});

test('encontrar o maior número do array [0, -1, -2, 5, 8]', () => {
  expect(maiorNumero([0, -1, -2, 5, 8])).toBe(8);
});

test('encontrar o maior número do array [-1, -2, -3]', () => {
  expect(maiorNumero([-1, -2, -3])).toBe(-1);
});

test('retornar -Infinity para um array vazio', () => {
  expect(maiorNumero([])).toBe(-Infinity);
});