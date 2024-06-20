function dobrarValores(array) {
  // Verifica se o input é um array
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array');
  }
  // Retorna um novo array com cada valor dobrado
  return array.map(num => num * 2);
}

function filtrarPares(array) {
  // Verifica se o input é um array
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array');
  }
  // Retorna um novo array com apenas os números pares
  return array.filter(num => num % 2 === 0);
}

function somarElementos(array) {
  // Verifica se o input é um array
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array');
  }
  // Retorna a soma de todos os elementos do array
  return array.reduce((acc, num) => acc + num, 0);
}

function reverterArray(array) {
  // Verifica se o input é um array
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array');
  }
  // Retorna um novo array com os elementos em ordem reversa
  return array.slice().reverse();
}

function removerDuplicados(array) {
  // Verifica se o input é um array
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array');
  }
  // Retorna um novo array sem duplicados
  return Array.from(new Set(array));
}

function concatenarArrays(array1, array2) {
  // Verifica se os inputs são arrays
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new TypeError('Both inputs must be arrays');
  }
  // Retorna um novo array concatenando array1 e array2
  return array1.concat(array2);
}

function maiorNumero(array) {
  // Verifica se o input é um array
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array');
  }
  // Verifica se o array está vazio
  if (array.length === 0) {
    return -Infinity
  }
  // Retorna o maior número do array
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
};
