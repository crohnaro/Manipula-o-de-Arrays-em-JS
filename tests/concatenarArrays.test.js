const { concatenarArrays } = require('../exercises/arrayFunctions');

test('concatenar os arrays [1, 2, 3] e [4, 5, 6]', () => {
  expect(concatenarArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

test('concatenar os arrays [0, -1] e [-2, 5, 8]', () => {
  expect(concatenarArrays([0, -1], [-2, 5, 8])).toEqual([0, -1, -2, 5, 8]);
});

test('retornar o segundo array quando o primeiro é vazio', () => {
  expect(concatenarArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
});

test('retornar o primeiro array quando o segundo é vazio', () => {
  expect(concatenarArrays([1, 2, 3], [])).toEqual([1, 2, 3]);
});