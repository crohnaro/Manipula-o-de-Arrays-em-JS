function dobrarValores(array) {
  return array.map(num => num * 2)
}

function filtrarPares(array) {
  return array.filter(num => num % 2 === 0)
}

function somarElementos(array) { 
  return array.reduce((num1, num2) => num1 + num2, 0)
}

function reverterArray(array) {
  return array.reverse()
}

function removerDuplicados(array) {
  return Array.from(new Set(array))
}

function concatenarArrays(array1, array2) {
  return array1.concat(array2)
}
function maiorNumero(array) {
  if(array.length === 0){ //verifica se o array esta vazia (OBS)
    return -Infinity
  }
  return Math.max(...array) //retornar o maior numero (OBS)
}

module.exports = {
  dobrarValores,
  filtrarPares,
  somarElementos,
  reverterArray,
  removerDuplicados,
  concatenarArrays,
  maiorNumero,
};
