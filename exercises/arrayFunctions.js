function dobrarValores(array) {
  return array.map(element => element * 2);

}
function filtrarPares(array) {
  return array.filter(element => element % 2 === 0);

}

function somarElementos(array) {
  return array.reduce((total, current) => total + (typeof current === 'number' ? current : 0), 0);
}

function reverterArray(array) {
  return array.slice().reverse();
}

function removerDuplicados(array) {
  return [...new Set(array)];
}

function concatenarArrays(array1, array2) {
  return array1.concat(array2);
}

function maiorNumero(array) {
  return Math.max(...array);
}
let array = [1, 2, 3, 4, 5];

console.log(dobrarValores(array));
console.log(filtrarPares(array));
console.log(somarElementos(array)); 
console.log(reverterArray(array)); 
console.log(removerDuplicados([1, 2, 2, 3, 4, 4, 5])); 
console.log(concatenarArrays(array, [6, 7, 8])); 
console.log(maiorNumero(array)); 

module.exports = {
  dobrarValores,
  filtrarPares,
  somarElementos,
  reverterArray,
  removerDuplicados,
  concatenarArrays,
  maiorNumero,
};
