function dobrarValores(array) {
return array.map(valor => valor * 2);
}

function filtrarPares(array) {
  return array.filter(valor => valor % 2 === 0);
}

function somarElementos(array) {
  return array.reduce((acc, valor) => acc + valor, 0);
}

function reverterArray(array) {
  return array.slice().reverse();
}

function removerDuplicados(array) {
  return array.from(new Set(array));
}

function concatenarArrays(array1, array2) {
  return array1.concat(array2);
}

function maiorNumero(array) {
  return Math.max(...array);
}

module.exports = {
dobrarValores,
filtrarPares,
somarElementos,
reverterArray,
removerDuplicados,
concatenarArrays,
maiorNumero,
}
