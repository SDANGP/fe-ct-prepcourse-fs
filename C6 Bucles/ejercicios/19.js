function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let suma = 0;
  for(i = 1 ; i <= n ; i+2){
    suma += i
  }
  return suma;
}

module.exports = sumarHastaN;
