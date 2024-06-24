function dobrarValores(array) {
  return array.map(elemento => elemento * 2)
  }
  
  function filtrarPares(array) {
  return array.filter(elemento1 => elemento1 % 2 === 0)
  }
  
  
  function somarElementos(array) {
  return array.reduce((acumulador, valor) => acumulador + valor, 0)
  }
  
  function reverterArray(array) {
  return array.reverse()
  }
  
  function removerDuplicados(array) {
  let set = new Set(array);
  let novoArray = Array.from(set);
  return novoArray
  }
  
  function concatenarArrays(array1, array2) {
  return array1.concat(array2)
  }
  
  
  function maiorNumero(array) {
  if (array.length === 0)
  return -Infinity
  
  array.sort ((a,b) => a-b)
  let lastElement = array.pop();
  return lastElement
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
